<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Event>
 */
class EventFactory extends Factory
{
    protected $model = Event::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->unique()->randomElement([
            'Grand Alumni Reunion 2026 Silver Jubilee',
            'Annual Cultural Night & Dinner',
            'Career Guidance & Networking Summit',
            'Winter Clothes Distribution Drive',
            'Annual Sports Day & Picnic',
            'Iftar & Doa Mahfil',
        ]);

        return [
            'title'        => $title,
            'slug'         => Str::slug($title),
            'description'  => $this->faker->paragraphs(3, true),
            'event_date'   => $this->faker->dateTimeBetween('now', '+6 months'),
            'location'     => $this->faker->randomElement([
                'DMHMA Campus Grounds, Dhaka',
                'International Convention City Bashundhara (ICCB)',
                'Officers Club, Baily Road, Dhaka',
                'Sena Malancha, Dhaka Cantt.',
            ]),
            'ticket_price' => $this->faker->randomElement([0, 500, 1000, 1500, 2500]),
            'banner_path'  => null,
            'is_published' => true,
        ];
    }

    /**
     * Past event state for testing expired events counter.
     */
    public function past(): static
    {
        return $this->state(fn (array $attributes) => [
            'event_date' => $this->faker->dateTimeBetween('-1 year', '-1 month'),
        ]);
    }
}
