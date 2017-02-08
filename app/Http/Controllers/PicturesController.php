<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pictures;

class PicturesController extends Controller
{
  public function getPictures($id = null)
  {
    if($id != null)
    {
      $pictures = Pictures::where('picture_id', $id)
              ->get();

              return $pictures;
    }
    else
    {
      $pictures = Pictures::all();
      return $pictures;
    }
  }
}
