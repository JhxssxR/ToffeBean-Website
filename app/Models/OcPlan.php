<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OcPlan extends Model
{
    protected $fillable = [
        'client_email',
        'species',
        'vibe',
        'colors',
        'quirks',
    ];
}
