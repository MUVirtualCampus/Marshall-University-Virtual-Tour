<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePictureLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('picture_links', function (Blueprint $table) {
          $table->increments('picture_link_id');
          $table->integer('first_picture_id')->unsigned();
          $table->integer('second_picture_id')->unsigned();
          $table->integer('location_id')->unsigned();
          $table->integer('floor')->nullable();
          $table->integer('heading');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('picture_links', function (Blueprint $table) {
            //
        });
    }
}
