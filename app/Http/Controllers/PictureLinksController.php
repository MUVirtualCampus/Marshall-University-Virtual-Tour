<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\PictureLinks;

class PictureLinksController extends Controller
{
  public function getPictureLinks($location_id = null)
  {
    if($location_id != null)
    {
      $picture_links = PictureLinks::where('location_id', $location_id)
              ->get();

              return $picture_links;
    }
    else
    {
      $picture_links = PictureLinks::all();
      return $picture_links;
    }
  }
}
