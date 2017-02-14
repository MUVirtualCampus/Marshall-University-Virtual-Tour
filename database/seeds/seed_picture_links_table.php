<?php

use Illuminate\Database\Seeder;

class seed_picture_links_table extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 1, 'second_picture_id' => 3, 'location_id' => 1, 'floor' => 3, 'heading' => 180,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 3, 'second_picture_id' => 1, 'location_id' => 1, 'floor' => 3, 'heading' => 0,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 3, 'second_picture_id' => 2, 'location_id' => 1, 'floor' => 3, 'heading' => 270,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 2, 'second_picture_id' => 3, 'location_id' => 1, 'floor' => 3, 'heading' => 90,]);
    }
}
