<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePicturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pictures', function (Blueprint $table) {
          $table->increments('picture_id');
          $table->integer('location_id')->unsigned();
          $table->integer('floor')->nullable();
          $table->string('description');
          $table->integer('heading');
          $table->string('url');
          $table->string('pano')->unique();
          $table->string('info')->nullable();
          $table->bit('is_landing');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pictures', function (Blueprint $table) {
            //
        });
    }
}
