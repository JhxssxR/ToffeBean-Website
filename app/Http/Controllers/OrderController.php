<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
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
            'status' => 'required|in:Waiting,In Progress,Completed',
        ]);

        $order->update($validated);

        return response()->json($order);
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json(null, 204);
    }
}
