<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DonationImage extends Model
{
    protected $fillable = [
        'donation_id',
        'path',
        'filename',
        'mime_type',
        'size',
        'is_primary',
        'order'
    ];

    protected $casts = [
        'is_primary' => 'boolean',
        'size' => 'integer',
        'order' => 'integer'
    ];

    public function donation(): BelongsTo
    {
        return $this->belongsTo(Donation::class);
    }
}