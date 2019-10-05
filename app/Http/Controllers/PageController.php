<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', ['route' => 'welcome']);
    }

    public function about()
    {
        return Inertia::render('About', ['route' => 'about']);
    }

    public function contact()
    {
        return Inertia::render('Contact', ['route' => 'contact']);
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

        /*
          Add mail functionality here.
        */

        return response()->json(null, 200);

    }
}
