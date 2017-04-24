<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlacesOfInterest extends Model
{
    protected $table = 'places_of_interest';
    protected $fillable = ['location_id', 'description', 'pano', 'picture_id'];
    protected $primaryKey = 'place_of_interest_id';
    public $timestamps = false;
}
