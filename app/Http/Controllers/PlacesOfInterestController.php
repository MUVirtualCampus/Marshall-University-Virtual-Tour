<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PlacesOfInterest;

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
}
