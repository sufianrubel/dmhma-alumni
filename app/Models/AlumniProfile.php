<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AlumniProfile extends Model
{
    /** @use HasFactory<\Database\Factories\AlumniProfileFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'batch_year',
        'student_id',
        'department',
        'blood_group',
        'phone',
        'date_of_birth',
        'occupation',
        'company',
        'designation',
        'bio',
        'linkedin_url',
        'facebook_url',
        'is_verified',
    ];

    protected $casts = [
        'batch_year'    => 'integer',
        'date_of_birth' => 'date',
        'is_verified'   => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
