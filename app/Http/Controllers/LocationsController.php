<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocationsController extends Controller
{
    public function getLocations($id = null)
    {
      if($id != null)
      {
        $locations = App\Locations::where('location_id', $id)
                ->get();

                return $locations;
      }
      else
      {
        $locations = App\Locations::all();
        return $locations;
      }
    }
}
