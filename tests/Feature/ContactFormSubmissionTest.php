<?php

namespace Tests\Feature;

use App\Mail\ContactFormSubmitted;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactFormSubmissionTest extends TestCase
{

    /** @test */
    public function contactFormSubmissionSuccess()
    {
        Mail::fake();

        Mail::assertNothingSent();

        $data = ['name' => 'Matt', 'email' => 'matt@example.net', 'start' => 'ASAP', 'type' => 'Full Stack', 'remote' => 'yes', 'description' => 'Some Stuff..'];

        $response = $this->post('/contact', $data);

        $response->assertOk();

        Mail::assertSent(ContactFormSubmitted::class, function ($mail) {
            return $mail->message->name === "Matt";
        });

        Mail::assertSent(ContactFormSubmitted::class, function ($mail) {
            return $mail->hasTo(config('mail.to.address'));
        });
    }


    /** @test */
    public function contactFormSubmissionFailNotAllFieldsCompleted()
    {
        Mail::fake();

        Mail::assertNothingSent();

        $data = ['name' => 'Matt', 'email' => 'matt@example.net', 'start' => 'ASAP', 'type' => 'Full Stack', 'remote' => 'yes', 'description' => ''];

        $response = $this->post('/contact', $data);

        $response->assertRedirect();

        Mail::assertNotSent(ContactFormSubmitted::class);
    }
}
