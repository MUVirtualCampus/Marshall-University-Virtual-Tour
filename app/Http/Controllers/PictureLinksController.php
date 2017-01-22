<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PictureLinksController extends Controller
{
  public function getPictureLinks($id = null)
  {
    if($id != null)
    {
      $picture_links = App\PictureLinks::where('picture_link_id', $id)
              ->get();

              return $picture_links;
    }
    else
    {
      $picture_links = App\PictureLinks::all();
      return $picture_links;
    }
  }
}
