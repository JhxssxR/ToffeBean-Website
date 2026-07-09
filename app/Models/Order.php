<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'commission_id',
        'client_email',
        'client_social',
        'species',
        'character_name',
        'theme',
        'notes',
        'quantity',
        'addons',
        'total_price',
        'status',
    ];

    protected $casts = [
        'addons' => 'array',
        'total_price' => 'decimal:2',
    ];

    public function commission()
    {
        return $this->belongsTo(Commission::class);
    }
}
