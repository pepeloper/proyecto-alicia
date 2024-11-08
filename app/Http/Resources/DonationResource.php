<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DonationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'uuid' => $this->uuid,
            'name' => $this->name,
            'description' => $this->description,
            'category' => CategoryResource::make($this->whenLoaded('category')),
            'images' => DonationImageResource::collection($this->whenLoaded('images')),
            'width' => $this->width,
            'height' => $this->height,
            'depth' => $this->depth,
            'need_transport' => $this->need_transport,
            'area' => $this->area,
            'contact_whatsapp' => $this->contact_whatsapp,
            'contact_email' => $this->contact_email,
            'created_at' => $this->created_at,
        ];
    }
}
