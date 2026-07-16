<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\HomeService;

$h = HomeService::find(1);
echo "Before: is_active=" . ($h->is_active ? 'true' : 'false') . PHP_EOL;

$h->update(['is_active' => false]);
$h->refresh();
echo "After hide: is_active=" . ($h->is_active ? 'true' : 'false') . PHP_EOL;

// Check what the home page route would return
$activeServices = HomeService::where('is_active', true)->orderBy('sort_order')->get();
echo "Active services count after hide: " . $activeServices->count() . PHP_EOL;
foreach ($activeServices as $s) {
    echo "  - {$s->title}" . PHP_EOL;
}

// Restore
$h->update(['is_active' => true]);
echo "Restored." . PHP_EOL;
