<?php

use Illuminate\Support\Facades\Cache;
use Inertia\Testing\AssertableInertia as Assert;

test('the landing page provides association content', function () {
    Cache::forget('welcome_stats_v2');
    Cache::forget('welcome_notices');
    Cache::forget('welcome_leadership');

    $response = $this->get(route('home'));

    $response->assertInertia(fn (Assert $page) => $page
        ->component('welcome')
        ->where('stats.totalMembers', 0)
        ->where('stats.activeBatches', 0)
        ->where('stats.eventsOrganized', 0)
        ->has('notices', 0)
        ->where('nextEvent', null)
        ->where('leadership', null)
        ->etc()
    );
});
