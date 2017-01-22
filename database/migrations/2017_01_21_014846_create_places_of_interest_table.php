<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlacesOfInterestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('places_of_interest', function (Blueprint $table) {
          $table->increments('place_of_interest_id');
          $table->integer('location_id')->unsigned();
          $table->string('description');
          $table->integer('heading');
          $table->string('url');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('places_of_interest', function (Blueprint $table) {
            //
        });
    }
}
