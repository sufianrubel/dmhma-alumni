<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'event_date',
        'location',
        'ticket_price',
        'banner_path',
        'is_published',
    ];

    protected $casts = [
        'event_date' => 'datetime',
        'ticket_price' => 'decimal:2',
        'is_published' => 'boolean',
    ];
}
