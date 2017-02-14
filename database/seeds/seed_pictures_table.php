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
        DB::table('picture_links')->insert(['picture_id' => increments,'location_id' => 1, 'floor' => 3, 'description' => 'WAEC 3rd Floor', 'pano' => 'waec_3_1', 'heading' => 0, 'url' => 'sample url', 'url' => 'sample info',]);
    }
}
