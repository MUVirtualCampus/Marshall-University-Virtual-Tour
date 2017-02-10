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
Route::get('pictures/{location_id?}', 'PicturesController@getPictures');
Route::get('picturelinks/{location_id?}', 'PictureLinksController@getPictureLinks');
Route::get('placesofinterest/{id?}', 'PlacesOfInterestController@getPlacesOfInterest');
