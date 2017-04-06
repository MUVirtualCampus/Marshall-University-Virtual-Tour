<?php

use Illuminate\Database\Seeder;

class seed_pictures_table extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174158/Engineering%20Floor%203/Main%20N.jpg', 'pano' => 'waec_3_1', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 270, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174706/Engineering%20Floor%203/Main%20E.jpg', 'pano' => 'waec_3_2', 'info' => '', 'is_landing' => 1,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486173987/Engineering%20Floor%203/Main%20NE.jpg', 'pano' => 'waec_3_3', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174033/Engineering%20Floor%203/Main%20%20NW.jpg', 'pano' => 'waec_3_4', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174148/Engineering%20Floor%203/NW%20Hall%201.jpg', 'pano' => 'waec_3_5', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174231/Engineering%20Floor%203/NW%20Hall%202.jpg', 'pano' => 'waec_3_6', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174271/Engineering%20Floor%203/NW%20Hall%203.jpg', 'pano' => 'waec_3_7', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174249/Engineering%20Floor%203/NW%20Hall%204.jpg', 'pano' => 'waec_3_8', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174265/Engineering%20Floor%203/NW%20Hall%205.jpg', 'pano' => 'waec_3_9', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 0, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174397/Engineering%20Floor%203/NW%20Corner.jpg', 'pano' => 'waec_3_10', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 270, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174496/Engineering%20Floor%203/W%20Hall%201.jpg', 'pano' => 'waec_3_11', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 270, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486174644/Engineering%20Floor%203/Main%20W.jpg', 'pano' => 'waec_3_12', 'info' => '', 'is_landing' => 0,]);
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'heading' => 270, 'url' => 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1487082913/Engineering%20Floor%202/Elevator.jpg', 'pano' => 'waec_2_1', 'info' => '', 'is_landing' => 1,]);
    }
}
