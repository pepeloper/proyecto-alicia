<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Donation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DonationControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_example(): void
    {
        $category = Category::create([
            'name' => 'Test Category',
            'slug' => 'test-category',
        ]);
        $payload = [
            'name' => 'Test Donation',
            'description' => 'Test Description',
            'category_id' => $category->id,
            'width' => 100,
            'height' => 100,
            'depth' => 100,
            'need_transport' => false,
            'street_address' => 'Carrer Benlliure, 23-1, València',
            'contact_channel' => 'whatsapp',
            'contact_value' => '1234567890',
        ];

        $response = $this->post('/donations', $payload);

        $response->assertStatus(302);

        dd(Donation::all());
    }
}
