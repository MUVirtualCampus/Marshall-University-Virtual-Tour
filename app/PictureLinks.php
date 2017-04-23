<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PictureLinks extends Model
{
    protected $table = 'picture_links';
    protected $fillable = ['picture_link_id', 'location_id', 'floor', 'heading', 'first_picture_id', 'second_picture_id'];
    protected $primaryKey = 'picture_link_id';
    public $timestamps = false;
}
