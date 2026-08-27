<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leadership extends Model
{
    /** @use HasFactory<\Database\Factories\LeadershipFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'position',
        'bio',
        'photo_path',
        'is_active',
    ];
    protected $casts = [
        'is_active' => 'boolean',
    ];
}
