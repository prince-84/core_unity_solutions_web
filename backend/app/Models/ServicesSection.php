<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServicesSection extends Model
{
    protected $fillable = [
        'mini_title',
        'main_title',
        'cards',
    ];

    protected $casts = [
        'cards' => 'array',
    ];
}
