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

  public function update(Request $request)
  {
    $id = $request->input('picture_link_id');
    $picture = PictureLinks::where('picture_link_id', $id)
                         ->update([
                            'location_id' => $request->input('location_id'),
                            'floor' => $request->input('floor'),
                            'first_picture_id' => $request->input('first_picture_id'),
                            'heading' => $request->input('heading'),
                            'second_picture_id' => $request->input('second_picture_id')
                          ]);
    return ['success' => true];

  }

  public function create(Request $request)
  {
    PictureLinks::create(array(
        'location_id' => $request->get('location_id'),
        'floor' => $request->get('floor'),
        'first_picture_id' => $request->get('first_picture_id'),
        'heading' => $request->get('heading'),
        'second_picture_id' => $request->get('second_picture_id')
      ));

    return ['success' => true];
  }

}
