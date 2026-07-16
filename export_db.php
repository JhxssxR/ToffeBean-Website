<?php

require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\User;
use App\Models\HomeService;
use App\Models\Commission;

$seederContent = "<?php\n\nnamespace Database\Seeders;\n\nuse Illuminate\Database\Seeder;\nuse Illuminate\Support\Facades\DB;\n\nclass ExportSeeder extends Seeder\n{\n    public function run(): void\n    {\n";

$pdo = new PDO('mysql:host=127.0.0.1;dbname=toffebean', 'root', '');
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

// Export Users
$stmt = $pdo->query('SELECT * FROM users');
$users = $stmt->fetchAll();
if (count($users) > 0) {
    $seederContent .= "        DB::table('users')->insert(" . var_export($users, true) . ");\n\n";
}

// Export HomeServices
$stmt = $pdo->query('SELECT * FROM home_services');
$services = $stmt->fetchAll();
if (count($services) > 0) {
    foreach ($services as &$s) {
        if (isset($s['gallery']) && is_string($s['gallery']) === false) {
            $s['gallery'] = json_encode($s['gallery']); // DB insert needs json string
        }
    }
    $seederContent .= "        DB::table('home_services')->insert(" . var_export($services, true) . ");\n\n";
}

// Export Commissions
$stmt = $pdo->query('SELECT * FROM commissions');
$commissions = $stmt->fetchAll();
if (count($commissions) > 0) {
    $seederContent .= "        DB::table('commissions')->insert(" . var_export($commissions, true) . ");\n\n";
}

$seederContent .= "    }\n}\n";

file_put_contents(__DIR__ . '/database/seeders/ExportSeeder.php', $seederContent);
echo "ExportSeeder.php created successfully!\n";
