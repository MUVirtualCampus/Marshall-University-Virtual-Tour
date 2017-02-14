<?php

use Illuminate\Database\Seeder;

class seed_places_of_interest_table extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('places_of_interest')->insert(['places_of_interest_id' => increments,'location_id' => 1, 'description' => 'sample description', 'heading' => 1, 'url' => 'sample url',]);
    }
}
