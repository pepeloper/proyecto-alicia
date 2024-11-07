<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Geocoder\Facades\Geocoder;

class Donation extends Model
{
    protected $fillable = [
        'uuid',
        'category_id',
        'name',
        'description',
        'width',
        'height',
        'depth',
        'need_transport',
        'area',
        'latitude',
        'longitude',
        'contact_whatsapp',
        'contact_email',
    ];

    protected static function booted()
    {
        static::saving(function ($donation) {
            if ($donation->isDirty(['street_address', 'city', 'postal_code', 'country'])) {
                $donation->geocodeAddress();
            }
        });
    }

    private function geocodeAddress()
    {
        $address = implode(', ', array_filter([
            $this->street_address,
            $this->city,
            $this->postal_code,
            $this->state,
            $this->country,
        ]));

        try {
            $result = Geocoder::getCoordinatesForAddress($address);

            if ($result['lat'] && $result['lng']) {
                $this->latitude = $result['lat'];
                $this->longitude = $result['lng'];
            }
        } catch (\Exception $e) {
            report($e);
        }
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(DonationImage::class);
    }

    public function getFullAddressAttribute(): string
    {
        return implode(', ', array_filter([
            $this->street_address,
            $this->city,
            $this->postal_code,
            $this->state,
            $this->country,
        ]));
    }
}