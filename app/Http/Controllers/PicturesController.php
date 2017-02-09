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
}
