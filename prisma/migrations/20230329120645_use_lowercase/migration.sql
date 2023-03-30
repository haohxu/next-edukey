/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Course_Occupation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Course_Provider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Division_Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Geolocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Occupation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Provider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course_Occupation" DROP CONSTRAINT "Course_Occupation_anzsco_fkey";

-- DropForeignKey
ALTER TABLE "Course_Occupation" DROP CONSTRAINT "Course_Occupation_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Course_Provider" DROP CONSTRAINT "Course_Provider_campusId_fkey";

-- DropForeignKey
ALTER TABLE "Course_Provider" DROP CONSTRAINT "Course_Provider_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Division_Course" DROP CONSTRAINT "Division_Course_courseCode_fkey";

-- DropForeignKey
ALTER TABLE "Provider" DROP CONSTRAINT "Provider_geographicId_fkey";

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "Course_Occupation";

-- DropTable
DROP TABLE "Course_Provider";

-- DropTable
DROP TABLE "Division_Course";

-- DropTable
DROP TABLE "Geolocation";

-- DropTable
DROP TABLE "Occupation";

-- DropTable
DROP TABLE "Provider";

-- CreateTable
CREATE TABLE "geolocation" (
    "id" INTEGER NOT NULL,
    "region_name" TEXT NOT NULL,
    "local_government_auth" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "geolocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course" (
    "id" INTEGER NOT NULL,
    "course_title" TEXT NOT NULL,
    "course_code" TEXT NOT NULL,
    "qualification_level" TEXT NOT NULL,
    "course_type" TEXT NOT NULL,
    "government_subsidised" INTEGER NOT NULL,
    "apprenticeship" INTEGER NOT NULL,
    "traineeship" INTEGER NOT NULL,
    "entry_requirement" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "occupation" (
    "anzsco" TEXT NOT NULL,
    "job_name" TEXT NOT NULL,
    "skills_shortage" INTEGER NOT NULL,
    "special" INTEGER NOT NULL,
    "is_job_outlook_valid" INTEGER NOT NULL,
    "job_outlook_url" TEXT NOT NULL,

    CONSTRAINT "occupation_pkey" PRIMARY KEY ("anzsco")
);

-- CreateTable
CREATE TABLE "provider" (
    "id" INTEGER NOT NULL,
    "asqa_code" TEXT NOT NULL,
    "provider_name" TEXT NOT NULL,
    "site_name" TEXT NOT NULL,
    "government_subsidised" TEXT NOT NULL,
    "address_line_1" TEXT,
    "address_line_2" TEXT,
    "suburb" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "geographic_id" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "url" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "course_provider" (
    "course_id" INTEGER NOT NULL,
    "campus_id" INTEGER NOT NULL,

    CONSTRAINT "course_provider_pkey" PRIMARY KEY ("course_id","campus_id")
);

-- CreateTable
CREATE TABLE "course_occupation" (
    "anzsco" TEXT NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "course_occupation_pkey" PRIMARY KEY ("anzsco","course_id")
);

-- CreateTable
CREATE TABLE "division_course" (
    "anzsic_division" TEXT NOT NULL,
    "anzsco_unit_group" TEXT NOT NULL,
    "course_code" TEXT NOT NULL,
    "course_name" TEXT NOT NULL,

    CONSTRAINT "division_course_pkey" PRIMARY KEY ("anzsic_division","course_code")
);

-- CreateIndex
CREATE UNIQUE INDEX "course_course_code_key" ON "course"("course_code");

-- AddForeignKey
ALTER TABLE "provider" ADD CONSTRAINT "provider_geographic_id_fkey" FOREIGN KEY ("geographic_id") REFERENCES "geolocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_provider" ADD CONSTRAINT "course_provider_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_provider" ADD CONSTRAINT "course_provider_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_occupation" ADD CONSTRAINT "course_occupation_anzsco_fkey" FOREIGN KEY ("anzsco") REFERENCES "occupation"("anzsco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_occupation" ADD CONSTRAINT "course_occupation_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "division_course" ADD CONSTRAINT "division_course_course_code_fkey" FOREIGN KEY ("course_code") REFERENCES "course"("course_code") ON DELETE RESTRICT ON UPDATE CASCADE;
