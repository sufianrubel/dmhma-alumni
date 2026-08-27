<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;
use App\Models\Notice;
use App\Models\Leadership;
use Illuminate\Support\Facades\Hash;
use App\Models\AlumniProfile;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Test Admin / User
        $admin = User::factory()->create([
            'name'              => 'Alumni Admin',
            'email'             => 'admin@dmhma.edu.bd',
            'password'          => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        AlumniProfile::factory()->create([
            'user_id'     => $admin->id,
            'batch_year'  => 2005,
            'blood_group' => 'O+',
            'occupation'  => 'System Administrator',
            'is_verified' => true,
        ]);

        // 2. Create 50 Regular Users with paired Alumni Profiles
        User::factory(50)
            ->has(AlumniProfile::factory(), 'profile')
            ->create();

        // 3. Create Past & Future Events
        Event::factory(3)->past()->create();
        
        Event::factory()->create([
            'title'        => 'Grand Alumni Reunion 2026',
            'slug'         => 'grand-alumni-reunion-2026',
            'description'  => 'Join us for a day of memories, networking, cultural programs, and grand dinner with all batchmates.',
            'event_date'   => now()->addDays(20)->setHour(18)->setMinute(0),
            'location'     => 'International Convention City Bashundhara (ICCB), Dhaka',
            'ticket_price' => 1500.00,
            'is_published' => true,
        ]);

        // 4. Create Notices
        Notice::factory(6)->create();

        // 5. Create Executive Leadership
        Leadership::factory()->create([
            'name'        => 'Engr. Rafiqul Islam',
            'designation' => 'President',
            'batch_year'  => 1998,
            'message'     => 'Our alumni community stands as a testament to our institution values. Let us continue to stay connected, support one another, and give back to our academy.',
            'is_active'   => true,
        ]);

        Leadership::factory()->create([
            'name'        => 'Dr. Tanvir Ahmed',
            'designation' => 'General Secretary',
            'batch_year'  => 2004,
            'message'     => 'We welcome all alumni to actively participate in our upcoming welfare programs and annual gatherings.',
            'is_active'   => false,
        ]);
    }
}
