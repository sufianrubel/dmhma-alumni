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
        Schema::create('alumni_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained()->cascadeOnDelete();
            
            // Academic Details
            $table->unsignedSmallInteger('batch_year')->index();
            $table->string('student_id')->nullable()->index();
            $table->string('department')->nullable();

            // Personal & Emergency Contact
            $table->string('blood_group', 5)->nullable()->index();
            $table->string('phone')->nullable();
            $table->date('date_of_birth')->nullable();
            
            // Professional Background
            $table->string('occupation')->nullable();
            $table->string('company')->nullable();
            $table->string('designation')->nullable();
            $table->text('bio')->nullable();
            
            // Social Links & Verification Status
            $table->string('linkedin_url')->nullable();
            $table->string('facebook_url')->nullable();
            $table->boolean('is_verified')->default(false)->index();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumni_profiles');
    }
};
