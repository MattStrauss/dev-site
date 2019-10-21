<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PageController@index')->name('welcome');
Route::get('/projects', 'PageController@projects')->name('contact');
Route::get('/contact', 'PageController@contact')->name('contact');
Route::post('/contact', 'PageController@contactFormSubmit')->name('contactSubmit');
