<?php

use App\Http\Controllers\CommissionController;
use App\Http\Controllers\OrderController;
use App\Http\Middleware\EnsureUserIsAdmin;
use App\Models\Commission;
use App\Models\Order;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/commissions', function () {
    $commissions = Commission::where('is_active', true)->orderBy('sort_order')->get();

    return Inertia::render('Commissions', [
        'initialCommissions' => $commissions,
    ]);
})->name('commissions');

Route::get('/order-tracker', function () {
    return Inertia::render('OrderTracker');
})->name('order-tracker');

Route::get('/oc-planner', function () {
    return Inertia::render('OcPlanner');
})->name('oc-planner');

Route::middleware(['auth', EnsureUserIsAdmin::class])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::apiResource('api/commissions', CommissionController::class);
    Route::apiResource('api/orders', OrderController::class)->except(['store']);
});

// Allow anyone to create an order
Route::post('api/orders', [OrderController::class, 'store']);

Route::middleware(['auth'])->group(function () {
    Route::get('/customer/dashboard', function () {
        $orders = Order::where('client_email', auth()->user()->email)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('CustomerDashboard', [
            'orders' => $orders,
        ]);
    })->name('customer.dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
