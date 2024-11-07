<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Donation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DonationSeeder extends Seeder
{
    public function run(): void
    {
        $donations = [
            [
                'category' => 'Mesas',
                'name' => 'Mesa de comedor',
                'description' => 'Mesa de madera maciza, extensible hasta 8 personas. Incluye 6 sillas.',
                'dimensions' => [60, 85, 180],
                'area' => 'Benetusser',
                'contact_channel' => 'whatsapp',
                'contact_value' => '+34600000000',
            ],
            [
                'category' => 'Textil de hogar',
                'name' => 'Sabanas',
                'description' => 'Sabanas de algodón, talla M, color azul',
                'dimensions' => [35, 5, 25],
                'area' => 'Paiporta',
                'contact_channel' => 'email',
                'contact_value' => 'usuarioprueba@example.com',
            ],
            [
                'category' => 'Estanterías',
                'name' => 'Estantería',
                'description' => 'Estantería de madera, para almacenar libros',
                'dimensions' => [45, 30, 30],
                'area' => 'Beniparrell',
                'contact_channel' => 'whatsapp',
                'contact_value' => '+34611111111',
            ],
            [
                'category' => 'Iluminación',
                'name' => 'Lámpara',
                'description' => 'Lámpara de pie, color blanco',
                'dimensions' => [30, 30, 120],
                'area' => 'Massanassa',
                'contact_channel' => 'whatsapp',
                'contact_value' => '+34622222222',
            ],
        ];

        foreach ($donations as $donationData) {
            $category = Category::where('name', $donationData['category'])->first();

            Donation::create([
                'uuid' => (string) Str::ulid(),
                'category_id' => $category->id,
                'name' => $donationData['name'],
                'description' => $donationData['description'],
                'width' => $donationData['dimensions'][0],
                'height' => $donationData['dimensions'][1],
                'depth' => $donationData['dimensions'][2],
                'need_transport' => rand(0, 1),
                'area' => $donationData['area'],
                'contact_whatsapp' => $donationData['contact_channel'] === 'whatsapp' ? $donationData['contact_value'] : null,
                'contact_email' => $donationData['contact_channel'] === 'email' ? $donationData['contact_value'] : null,
            ]);
        }
    }
}