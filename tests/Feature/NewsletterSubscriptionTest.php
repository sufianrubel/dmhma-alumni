<?php

use App\Models\NewsletterSubscriber;

test('a visitor can subscribe to alumni updates', function () {
    $response = $this
        ->from(route('home'))
        ->post(route('newsletter.subscribe'), [
            'email' => ' Alumni@Example.com ',
        ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect(route('home'));

    $this->assertDatabaseHas(NewsletterSubscriber::class, [
        'email' => 'alumni@example.com',
    ]);
});

test('a valid email address is required to subscribe', function (string $email) {
    $response = $this
        ->from(route('home'))
        ->post(route('newsletter.subscribe'), [
            'email' => $email,
        ]);

    $response
        ->assertSessionHasErrors('email')
        ->assertRedirect(route('home'));

    expect(NewsletterSubscriber::query()->count())->toBe(0);
})->with([
    'empty email' => '',
    'invalid email' => 'not-an-email',
]);

test('the same email address cannot subscribe twice', function () {
    NewsletterSubscriber::factory()->create([
        'email' => 'alumni@example.com',
    ]);

    $response = $this
        ->from(route('home'))
        ->post(route('newsletter.subscribe'), [
            'email' => 'alumni@example.com',
        ]);

    $response
        ->assertSessionHasErrors([
            'email' => 'This email address is already subscribed.',
        ])
        ->assertRedirect(route('home'));

    expect(NewsletterSubscriber::query()->count())->toBe(1);
});
