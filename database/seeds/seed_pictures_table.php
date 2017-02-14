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
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 1, 'pano' => 'sample pano', 'description' => 'sample description', 'heading' => 1, 'url' => 'sample url', 'url' => 'sample info',]);
    }
}
