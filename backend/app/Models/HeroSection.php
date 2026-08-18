<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'button_text',
        'button_link',
        'button_icon',
        'globe_image',
        'global_presence',
        'logo_ticker',
    ];

    protected $casts = [
        'global_presence' => 'array',
        'logo_ticker' => 'array',
    ];
}
