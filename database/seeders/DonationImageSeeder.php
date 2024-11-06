<?php

namespace Database\Seeders;

use App\Models\Donation;
use App\Models\DonationImage;
use Illuminate\Database\Seeder;

class DonationImageSeeder extends Seeder
{
    public function run(): void
    {
        $unsplashImages = [
            'Mesas' => [
                'https://images.unsplash.com/photo-1577140917170-285929fb55b7',
                'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf',
                'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc',
            ],
            'Textil de hogar' => [
                'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6',
                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
            ],
            'Estanterías' => [
                'https://images.unsplash.com/photo-1594620302200-9a762244a156',
                'https://images.unsplash.com/photo-1588593333007-fcc6ea9e3c01',
                'https://images.unsplash.com/photo-1597072689227-8882273e8f6a',
            ],
            'Iluminación' => [
                'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15',
                'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f',
                'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89',
            ],
            'Sillas' => [
                'https://images.unsplash.com/photo-1503602642458-232111445657',
                'https://images.unsplash.com/photo-1592078615290-033ee584e267',
                'https://images.unsplash.com/photo-1586158291800-2665f07bba79',
            ],
            'Sofás' => [
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
                'https://images.unsplash.com/photo-1550254478-ead40cc54513',
                'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
            ],
            'Camas' => [
                'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
                'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6',
            ],
            'Textil de hogar' => [
                'https://images.unsplash.com/photo-1586318018858-4df3297d11d5',
                'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
                'https://plus.unsplash.com/premium_photo-1670475326413-f69f74397650',
            ],
        ];

        $donations = Donation::with('category')->get();

        foreach ($donations as $donation) {
            $categoryName = $donation->category->name;
            $images = $unsplashImages[$categoryName] ?? array_values($unsplashImages)[0];

            foreach ($images as $index => $imageUrl) {
                DonationImage::create([
                    'donation_id' => $donation->id,
                    'url' => $imageUrl,
                    'order' => $index + 1,
                ]);
            }
        }
    }
}