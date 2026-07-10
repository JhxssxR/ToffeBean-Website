<?php

namespace App\Http\Controllers;

use App\Models\Commission;
use Illuminate\Http\Request;

class CommissionController extends Controller
{
    public function index()
    {
        return response()->json(Commission::orderBy('sort_order')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'base_price' => 'required|numeric',
            'price_display' => 'nullable|string|max:255',
            'avatar' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        $commission = Commission::create($validated);

        return response()->json($commission, 201);
    }

    public function show(Commission $commission)
    {
        return response()->json($commission);
    }

    public function update(Request $request, Commission $commission)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'base_price' => 'sometimes|required|numeric',
            'price_display' => 'nullable|string|max:255',
            'avatar' => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ]);

        $commission->update($validated);

        return response()->json($commission);
    }

    public function destroy(Commission $commission)
    {
        $commission->delete();

        return response()->json(null, 204);
    }
}
