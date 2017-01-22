<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PicturesController extends Controller
{
  public function getPictures($id = null)
  {
    if($id != null)
    {
      $pictures = App\Pictures::where('picture_id', $id)
              ->get();

              return $pictures;
    }
    else
    {
      $pictures = App\Pictures::all();
      return $pictures;
    }
  }
}
