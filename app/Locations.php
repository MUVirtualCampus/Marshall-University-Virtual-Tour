<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Locations extends Model
{
    protected $table = 'locations';
    protected $fillable = ['name', 'description', 'floors'];
    protected $primaryKey = 'location_id';
    public $timestamps = false;
}
