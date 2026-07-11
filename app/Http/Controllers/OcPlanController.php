<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OcPlanController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_email' => 'nullable|email',
            'species' => 'nullable|string',
            'vibe' => 'nullable|string',
            'colors' => 'nullable|string',
            'quirks' => 'nullable|string',
        ]);

        $ocPlan = \App\Models\OcPlan::create($validated);

        return response()->json($ocPlan, 201);
    }
}
