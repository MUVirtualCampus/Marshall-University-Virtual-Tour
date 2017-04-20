<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pictures extends Model
{
    protected $table = 'pictures';
    protected $fillable = ['location_id', 'floor', 'description', 'heading', 'url', 'pano', 'info', 'is_landing'];
    protected $primaryKey = 'picture_id';
    public $timestamps = false;
}
