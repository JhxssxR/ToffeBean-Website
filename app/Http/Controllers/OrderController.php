<?php

namespace App\Http\Controllers;

use App\Mail\OrderProgressUpdate;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    private const STATUS_ORDER = [
        'Waiting'     => 0,
        'In Progress' => 1,
        'Completed'   => 2,
    ];

    public function index()
    {
        return Order::with('commission')->orderBy('created_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'commission_id' => 'required|exists:commissions,id',
            'client_email' => 'required|email',
            'client_social' => 'nullable|string',
            'species' => 'nullable|string',
            'character_name' => 'nullable|string',
            'theme' => 'nullable|string',
            'notes' => 'nullable|string',
            'quantity' => 'integer|min:1',
            'addons' => 'nullable|string', // JSON string from frontend
            'total_price' => 'required|numeric',
            'reference_images' => 'nullable|array|max:5',
            'reference_images.*' => 'nullable|image|max:2048', // max 2MB per image
        ]);

        $order = Order::create($validated);

        return response()->json($order, 201);
    }

    public function update(Request $request, Order $order)
    {
        $validated = $request->validate([
            'status'           => 'required|in:Waiting,In Progress,Completed',
            'progress_image'   => 'nullable|image|max:5120', // max 5MB
            'progress_message' => 'nullable|string|max:2000',
        ]);

        // Enforce forward-only status progression
        $currentRank = self::STATUS_ORDER[$order->status] ?? 0;
        $newRank     = self::STATUS_ORDER[$validated['status']] ?? 0;

        if ($newRank < $currentRank) {
            return response()->json([
                'message' => 'Status cannot go backwards. Current status: ' . $order->status,
            ], 422);
        }

        // Handle progress image upload
        if ($request->hasFile('progress_image')) {
            // Delete old image if it exists
            if ($order->progress_image) {
                Storage::disk('public')->delete($order->progress_image);
            }

            $path = $request->file('progress_image')->store('progress-updates', 'public');
            $validated['progress_image'] = $path;
        }

        $order->update($validated);

        // Send email notification when status changes to "In Progress"
        if ($validated['status'] === 'In Progress' && $order->client_email) {
            try {
                $order->load('commission');
                Mail::to($order->client_email)->send(new OrderProgressUpdate($order));
            } catch (\Exception $e) {
                // Log the error but don't fail the status update
                \Log::warning('Failed to send progress email for order #' . $order->id . ': ' . $e->getMessage());
            }
        }

        return response()->json($order);
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json(null, 204);
    }
}
