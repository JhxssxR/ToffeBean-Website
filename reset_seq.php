<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\DB;
DB::statement("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
echo "Sequence reset successfully!\n";
