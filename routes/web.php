<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');


Route::get('/commissions', function () {
    $commissions = \App\Models\Commission::where('is_active', true)->orderBy('sort_order')->get();
    return Inertia::render('Commissions', [
        'initialCommissions' => $commissions
    ]);
})->name('commissions');

Route::get('/order-tracker', function () {
    return Inertia::render('OrderTracker');
})->name('order-tracker');

Route::get('/oc-planner', function () {
    return Inertia::render('OcPlanner');
})->name('oc-planner');

Route::middleware(['auth', \App\Http\Middleware\EnsureUserIsAdmin::class])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::apiResource('api/commissions', App\Http\Controllers\CommissionController::class);
    Route::apiResource('api/orders', App\Http\Controllers\OrderController::class)->except(['store']);
});

// Allow anyone to create an order
Route::post('api/orders', [App\Http\Controllers\OrderController::class, 'store']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
