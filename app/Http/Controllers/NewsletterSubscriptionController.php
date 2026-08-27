<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubscribeToNewsletterRequest;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class NewsletterSubscriptionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(SubscribeToNewsletterRequest $request): RedirectResponse
    {
        NewsletterSubscriber::create($request->validated());

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => __('You are subscribed to DMHMA alumni updates.'),
        ]);

        return back();
    }
}
