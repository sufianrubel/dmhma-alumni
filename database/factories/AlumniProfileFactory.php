<?php

namespace Database\Factories;

use App\Models\AlumniProfile;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends Factory<AlumniProfile>
 */
class AlumniProfileFactory extends Factory
{
    protected $model = AlumniProfile::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'       => User::factory(),
            'batch_year'    => $this->faker->numberBetween(1998, 2025),
            'student_id'    => 'DMHMA-' . $this->faker->unique()->numberBetween(1000, 9999),
            'department'    => $this->faker->randomElement(['Science', 'Commerce', 'Humanities']),
            'blood_group'   => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            'phone'         => $this->faker->phoneNumber(),
            'date_of_birth' => $this->faker->dateTimeBetween('-45 years', '-18 years')->format('Y-m-d'),
            'occupation'    => $this->faker->randomElement([
                'Software Engineer', 'Civil Servant', 'Banker', 'Doctor', 'Entrepreneur', 'Teacher'
            ]),
            'company'       => $this->faker->company(),
            'designation'   => $this->faker->jobTitle(),
            'bio'           => $this->faker->sentence(12),
            'linkedin_url'  => 'https://linkedin.com/in/' . $this->faker->userName(),
            'facebook_url'  => 'https://facebook.com/' . $this->faker->userName(),
            'is_verified'   => $this->faker->boolean(80),
        ];
    }
}
