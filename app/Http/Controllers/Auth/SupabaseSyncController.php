<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class SupabaseSyncController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'access_token' => 'required|string',
        ]);

        $supabaseUrl = env('VITE_SUPABASE_URL');
        $supabaseKey = env('VITE_SUPABASE_ANON_KEY');

        if (! $supabaseUrl || ! $supabaseKey) {
            return response()->json(['message' => 'Supabase configuration is missing on the server.'], 500);
        }

        // Verify the token by calling Supabase's user endpoint
        $response = Http::withHeaders([
            'apikey' => $supabaseKey,
            'Authorization' => 'Bearer '.$request->access_token,
        ])->get($supabaseUrl.'/auth/v1/user');

        if ($response->failed()) {
            return response()->json(['message' => 'Invalid or expired Supabase token.'], 401);
        }

        $supabaseUser = $response->json();

        $email = $supabaseUser['email'] ?? null;
        if (! $email) {
            return response()->json(['message' => 'Email not found in Supabase user data.'], 400);
        }

        $name = $supabaseUser['user_metadata']['full_name'] ?? explode('@', $email)[0];
        $avatar = $supabaseUser['user_metadata']['avatar_url'] ?? null;

        // Find or create the Laravel user
        $user = User::firstOrCreate(
            ['email' => $email],
            [
                'name' => $name,
                'avatar' => $avatar,
                'password' => Hash::make(Str::random(24)),
                'role' => 'customer',
            ]
        );

        // Update avatar if they already exist but have a new avatar
        if ($user->avatar !== $avatar && $avatar) {
            $user->update(['avatar' => $avatar]);
        }

        // Log the user in to Laravel's session
        Auth::login($user);

        return response()->json([
            'message' => 'Successfully synced and logged in.',
            'redirect' => $user->role === 'admin' ? route('dashboard', [], false) : route('customer.dashboard', [], false),
        ]);
    }
}
