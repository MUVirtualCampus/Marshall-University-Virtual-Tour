<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacesOfInterest;

class PlacesOfInterestController extends Controller
{
  public function getPlacesOfInterest($id = null)
  {
    if($id != null)
    {
      $places_of_interest = PlacesOfInterest::where('place_of_interest_id', $id)
              ->get();

              return $places_of_interest;
    }
    else
    {
      $places_of_interest = PlacesOfInterest::all();
      return $places_of_interest;
    }
  }
}
