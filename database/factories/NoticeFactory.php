<?php

namespace Database\Factories;

use App\Models\Notice;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Notice>
 */
class NoticeFactory extends Factory
{
    protected $model = Notice::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->unique()->randomElement([
            'Registration open for Grand Alumni Reunion 2026',
            'Urgent Call: Emergency Welfare Fund for Batch 2012 Member',
            'Publication of Executive Committee Election Schedule',
            'Distribution of Life Membership Identity Cards',
            'Invitation to Annual General Meeting (AGM)',
            'Scholarship Application for Deserving Current Students',
        ]);

        return [
            'title'        => $title,
            'slug'         => Str::slug($title),
            'category'     => $this->faker->randomElement(['General', 'Welfare', 'Election', 'Event', 'Academic']),
            'content'      => $this->faker->paragraphs(2, true),
            'is_published' => true,
            'created_at'   => $this->faker->dateTimeBetween('-3 months', 'now'),
        ];
    }
}
