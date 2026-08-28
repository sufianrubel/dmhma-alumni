<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('alumni_profiles', function (Blueprint $table) {
            $table->unsignedSmallInteger('batch_year')->nullable()->change();
            $table->string('nickname', 100)->nullable()->after('student_id');
            $table->string('father_name')->nullable()->after('nickname');
            $table->string('mother_name')->nullable()->after('father_name');
            $table->string('gender', 20)->nullable()->after('date_of_birth');
            $table->text('present_address')->nullable()->after('phone');
            $table->text('permanent_address')->nullable()->after('present_address');
            $table->string('tshirt_size', 5)->nullable()->after('permanent_address');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('alumni_profiles', function (Blueprint $table) {
            $table->dropColumn([
                'father_name',
                'mother_name',
                'gender',
                'nickname',
                'present_address',
                'permanent_address',
                'tshirt_size',
            ]);
            $table->unsignedSmallInteger('batch_year')->nullable(false)->change();
        });
    }
};
