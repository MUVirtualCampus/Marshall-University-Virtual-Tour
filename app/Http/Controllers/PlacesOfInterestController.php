<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlacesOfInterestController extends Controller
{
  public function getPlacesOfInterest($id = null)
  {
    if($id != null)
    {
      $places_of_interest = App\PlacesOfInterest::where('place_of_interest_id', $id)
              ->get();

              return $places_of_interest;
    }
    else
    {
      $places_of_interest = App\PlacesOfInterest::all();
      return $places_of_interest;
    }
  }
}
