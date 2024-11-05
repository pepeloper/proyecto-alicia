<?php

namespace Database\Seeders;

use App\Models\Donation;
use App\Models\DonationImage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DonationImageSeeder extends Seeder
{
    public function run(): void
    {
        $unsplashImages = [
            'Mesas' => [
                'https://images.unsplash.com/photo-1577140917170-285929fb55b7',
                'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf',
            ],
            'Ropa' => [
                'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
                'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f',
            ],
            'Almacenaje' => [
                'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
                'https://images.unsplash.com/photo-1628602040838-100dc842c4cd',
            ],
        ];

        $donations = Donation::with('category')->get();

        foreach ($donations as $donation) {
            $categoryName = $donation->category->name;
            $images = $unsplashImages[$categoryName] ?? array_values($unsplashImages)[0];

            foreach ($images as $imageUrl) {
                DonationImage::create([
                    'donation_id' => $donation->id,
                    'url' => $imageUrl,
                    'order' => 1,
                ]);
            }
        }
    }
}