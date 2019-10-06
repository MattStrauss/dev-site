<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RouteTest extends TestCase
{

    /** @test */
    public function welcome()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /** @test */
    public function contact()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
