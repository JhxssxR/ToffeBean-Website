<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function update(Request $request)
    {
        $data = $request->except('_token', '_method');

        foreach ($data as $key => $value) {
            $setting = Setting::where('key', $key)->first();
            if ($setting) {
                if ($request->hasFile($key)) {
                    // Delete old uploaded file if it exists
                    if ($setting->value && str_starts_with($setting->value, '/storage/')) {
                        $oldPath = str_replace('/storage/', '', $setting->value);
                        if (Storage::disk('public')->exists($oldPath)) {
                            Storage::disk('public')->delete($oldPath);
                        }
                    }

                    $path = $request->file($key)->store('settings', 'public');
                    $setting->value = '/storage/' . $path;
                } else if ($value !== null) {
                    $setting->value = $value;
                }
                $setting->save();
            }
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
