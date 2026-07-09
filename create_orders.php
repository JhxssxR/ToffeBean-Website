<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

Schema::dropIfExists('orders');
Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->foreignId('commission_id')->constrained()->onDelete('cascade');
    $table->string('client_email');
    $table->string('client_social')->nullable();
    $table->string('species')->nullable();
    $table->string('character_name')->nullable();
    $table->string('theme')->nullable();
    $table->text('notes')->nullable();
    $table->integer('quantity')->default(1);
    $table->json('addons')->nullable();
    $table->decimal('total_price', 8, 2);
    $table->string('status')->default('Waiting');
    $table->timestamps();
});
echo "Table created.\n";
