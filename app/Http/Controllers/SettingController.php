<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function update(Request $request)
    {
        $data = $request->except('_token', '_method');

        foreach ($data as $key => $value) {
            $setting = Setting::where('key', $key)->first();
            if ($setting) {
                if ($request->hasFile($key)) {
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
