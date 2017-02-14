<?php

use Illuminate\Database\Seeder;

class seed_locations_table extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('locations')->insert(['location_id' => increments,'name' => 'waec', 'description' => 'Weisberg Applied Engineering Complex', 'floors' => 4,]);
    }
}
