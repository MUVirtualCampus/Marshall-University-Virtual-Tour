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
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 1, 'second_picture_id' => 4, 'location_id' => 1, 'floor' => 3, 'heading' => 0,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 4, 'second_picture_id' => 1, 'location_id' => 1, 'floor' => 3, 'heading' => 180,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 4, 'second_picture_id' => 5, 'location_id' => 1, 'floor' => 3, 'heading' => 0,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 5, 'second_picture_id' => 4, 'location_id' => 1, 'floor' => 3, 'heading' => 180,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 5, 'second_picture_id' => 6, 'location_id' => 1, 'floor' => 3, 'heading' => 0,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 6, 'second_picture_id' => 5, 'location_id' => 1, 'floor' => 3, 'heading' => 180,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 6, 'second_picture_id' => 7, 'location_id' => 1, 'floor' => 3, 'heading' => 0,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 7, 'second_picture_id' => 6, 'location_id' => 1, 'floor' => 3, 'heading' => 180,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 7, 'second_picture_id' => 8, 'location_id' => 1, 'floor' => 3, 'heading' => 0,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 8, 'second_picture_id' => 7, 'location_id' => 1, 'floor' => 3, 'heading' => 180,]); 
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 8, 'second_picture_id' => 9, 'location_id' => 1, 'floor' => 3, 'heading' => 0,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 9, 'second_picture_id' => 8, 'location_id' => 1, 'floor' => 3, 'heading' => 180,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 9, 'second_picture_id' => 10, 'location_id' => 1, 'floor' => 3, 'heading' => 0,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 10, 'second_picture_id' => 9, 'location_id' => 1, 'floor' => 3, 'heading' => 180,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 10, 'second_picture_id' => 11, 'location_id' => 1, 'floor' => 3, 'heading' => 270,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 11, 'second_picture_id' => 10, 'location_id' => 1, 'floor' => 3, 'heading' => 90,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 4, 'second_picture_id' => 12, 'location_id' => 1, 'floor' => 3, 'heading' => 270,]);
        DB::table('picture_links')->insert(['picture_link_id' => increments,'first_picture_id' => 12, 'second_picture_id' => 4, 'location_id' => 1, 'floor' => 3, 'heading' => 90,]);

    }
}
