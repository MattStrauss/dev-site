<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', ['route' => 'welcome', 'title' => 'Home - Matt Strauss Developer']);
    }

    public function contact()
    {
        return Inertia::render('Contact', ['route' => 'contact', 'title' => 'Contact - Matt Strauss Developer']);
    }

    public function contactFormSubmit(Request $request)
    {

        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            'start' => 'required',
            'type' => 'required',
            'remote' => 'required',
            'description' => 'required',
        ]);

        Mail::to(config('mail.to.address'))->send(new ContactFormSubmitted($request));

        return response()->json(null, 200);

    }
}
