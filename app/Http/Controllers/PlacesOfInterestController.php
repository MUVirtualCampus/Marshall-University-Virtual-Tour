<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacesOfInterest;
use App\Pictures;

class PlacesOfInterestController extends Controller
{
  public function getPlacesOfInterest($location_id = null)
  {
    if($location_id != null)
    {
      $places_of_interest = PlacesOfInterest::where('location_id', $location_id)
              ->orderBy('description')
              ->get();

              return $places_of_interest;
    }
    else
    {
      $places_of_interest = PlacesOfInterest::all();
      return $places_of_interest;
    }
  }

  public function update(Request $request)
  {
    try
    {
      $id = $request->input('place_of_interest_id');
      $poi = PlacesOfInterest::where('place_of_interest_id', $id)
                          ->update([
                              'location_id' => $request->input('location_id'),
                              'description' => $request->input('description'),
                              'pano' => $request->input('pano'),
                              'picture_id' => $request->input('picture_id')
                            ]);

      $picture = Pictures::where('picture_id', $request->input('picture_id'))
                          ->update([
                            'info' => $request->input('info')
                          ]);

      return ['success' => true];
    }
    catch(\Exception $e)
    {
      return ['success' => false];
    }

  }

  public function create(Request $request)
  {
    try
    {
      $poi = PlacesOfInterest::create(array(
          'location_id' => $request->get('location_id'),
          'pano' => $request->get('pano'),
          'description' => $request->get('description'),
          'picture_id' => $request->get('picture_id')
        ));
      $picture = Pictures::where('picture_id', $request->input('picture_id'))
                          ->update([
                            'info' => $request->input('info')
                          ]);
        return ['success' => true];
    }

    catch(\Exception $e)
    {
      return ['success' => false];
    }
  }
}
