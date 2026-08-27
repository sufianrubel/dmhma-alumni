<?php

namespace App\Http\Controllers;

use App\Models\AlumniProfile;
use App\Models\Event;
use App\Models\Leadership;
use App\Models\Notice;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        $stats = Cache::remember('welcome_stats_v2', 3600, function (): array {
            return [
                'totalMembers' => User::whereNotNull('email_verified_at')->count(),
                'activeBatches' => AlumniProfile::distinct('batch_year')->count('batch_year'),
                'eventsOrganized' => Event::where('event_date', '<', now())->count(),
            ];
        });

        $notices = Cache::remember('welcome_notices', 900, function () {
            return Notice::query()
                ->select(['id', 'title', 'category', 'created_at', 'slug'])
                ->where('is_published', true)
                ->latest()
                ->take(4)
                ->get();
        });

        $nextEvent = Event::query()
            ->select(['id', 'title', 'slug', 'event_date', 'location', 'ticket_price', 'banner_path'])
            ->where('event_date', '>=', now())
            ->where('is_published', true)
            ->orderBy('event_date', 'asc')
            ->first();

        $leadership = Cache::remember('welcome_leadership', 86400, function () {
            return Leadership::query()
                ->select(['name', 'designation', 'batch_year', 'message', 'image_path'])
                ->where('is_active', true)
                ->latest()
                ->first();
        });

        return Inertia::render('welcome', [
            'stats' => $stats,
            'notices' => $notices,
            'nextEvent' => $nextEvent,
            'leadership' => $leadership,
        ]);
    }
}
