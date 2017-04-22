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

    public function update(Request $request)
  {
    $id = $request->input('location_id');
    $location = Locations::where('location_id', $id)
                         ->update([                            
                            'name' => $request->input('name'),
                            'description' => $request->input('description'),
                            'floors' => $request->input('floors')
                          ]);
    return ['success' => true];

  }
}
