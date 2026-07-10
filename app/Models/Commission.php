<?php

namespace App\Models;

use Database\Factories\CommissionFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commission extends Model
{
    /** @use HasFactory<CommissionFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'base_price',
        'price_display',
        'avatar',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'base_price' => 'float',
        'sort_order' => 'integer',
    ];
}
