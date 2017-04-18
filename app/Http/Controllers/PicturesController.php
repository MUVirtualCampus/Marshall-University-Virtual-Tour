<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pictures;

class PicturesController extends Controller
{
  public function getPictures(Request $filter)
  {
    $location_id = $filter->input('location_id');
    $user_id = $filter->input('user_id');
    if ($location_id != null)
    {
      $pictures = Pictures::where('location_id', $location_id);
      if($user_id != null)
      {
        $pictures = $pictures->where('user_id', $user_id);

      }
      $pictures = $pictures->get();

      return $pictures;
    }
    else
    {
      $pictures = Pictures::all();
      return $pictures;
    }
  }

  public function update(Request $request)
  {
    $id = $request->input('picture_id');
    $picture = Pictures::where('picture_id', $id)
                         ->update([
                            'location_id' => $request->input('location_id'),
                            'floor' => $request->input('floor'),
                            'description' => $request->input('description'),
                            'heading' => $request->input('heading'),
                            'url' => $request->input('url'),
                            'pano' => $request->input('pano'),
                            'info' => $request->input('info'),
                            'is_landing' => $request->input('is_landing')
                          ]);
    return response()->json(["picture" => $picture]);
  }
}
