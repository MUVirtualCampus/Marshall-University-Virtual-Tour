<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Locations;

class LocationsController extends Controller
{
    public function getLocations($id = null)
    {
      if($id != null)
      {
        $locations = Locations::where('location_id', $id)
                ->get();

                return $locations;
      }
      else
      {
        $locations = Locations::all();
        return $locations;
      }
    }
}
