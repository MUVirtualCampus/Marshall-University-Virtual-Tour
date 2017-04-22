<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('locations/{id?}', 'LocationsController@getLocations');
Route::post('pictures', 'PicturesController@getPictures');
Route::patch('pictures', 'PicturesController@update');
Route::post('pictures/create', 'PicturesController@create');
Route::get('picturelinks/{location_id?}', 'PictureLinksController@getPictureLinks');
Route::get('placesofinterest/{location_id?}', 'PlacesOfInterestController@getPlacesOfInterest');
Route::patch('placesofinterest', 'PlacesOfInterestController@update');
Route::post('authenticate', 'AuthenticateController@authenticate');
Route::patch('locations', 'LocationsController@update');
Route::post('locations/create', 'LocationsController@create');
