<?php

namespace Database\Factories;

use App\Models\Leadership;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Leadership>
 */
class LeadershipFactory extends Factory
{
    protected $model = Leadership::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'        => $this->faker->name(),
            'designation' => $this->faker->randomElement([
                'President',
                'General Secretary',
                'Vice President',
                'Joint Secretary',
                'Organizing Secretary',
                'Treasurer',
            ]),
            'batch_year'  => $this->faker->numberBetween(1995, 2018),
            'message'     => 'Together, we are building a stronger network to support our alma mater and empower the future leaders of tomorrow.',
            'image_path'  => null,
            'is_active'   => true,
        ];
    }
}
