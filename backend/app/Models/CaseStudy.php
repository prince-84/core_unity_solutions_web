<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseStudy extends Model
{
    use HasFactory;

    protected $table = 'case_studies';

    protected $fillable = [
        'client_name',
        'project_title',
        'slug',
        'hero_image',
        'challenge_text',
        'solution_text',
        'metrics',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'metrics' => 'array',
        ];
    }
}
