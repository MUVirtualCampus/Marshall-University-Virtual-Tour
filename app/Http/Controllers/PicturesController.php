<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pictures;

class PicturesController extends Controller
{
  public function getPictures($location_id = null)
  {
    if($location_id != null)
    {
      $pictures = Pictures::where('location_id', $location_id)
              ->get();

              return $pictures;
    }
    else
    {
      $pictures = PictureLinks::all();
      return $pictures;
    }
  }

  public function savePicture(Request $request)
  {
    Pictures::create(array(
        'location_id' => $request->get('location_id'),
        'floor' => $request->get('floor'),
        'description' => $request->get('description'),
        'heading' => $request->get('heading'),
        'url' => $request->get('url'),
        'pano' => $request->get('pano'),
        'info' => $request->get('info'),
        'is_landing' => $request->get('is_landing')
      ));

    return ['success' => true];
  }
}
