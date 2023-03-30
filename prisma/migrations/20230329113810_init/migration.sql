-- CreateTable
CREATE TABLE "Geolocation" (
    "id" INTEGER NOT NULL,
    "regionName" TEXT NOT NULL,
    "localGovernmentAuth" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Geolocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" INTEGER NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "qualificationLevel" TEXT NOT NULL,
    "courseType" TEXT NOT NULL,
    "governmentSubsidised" INTEGER NOT NULL,
    "apprenticeship" INTEGER NOT NULL,
    "traineeship" INTEGER NOT NULL,
    "entryRequirement" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Occupation" (
    "anzsco" TEXT NOT NULL,
    "jobName" TEXT NOT NULL,
    "skillsShortage" INTEGER NOT NULL,
    "special" INTEGER NOT NULL,
    "isJobOutlookValid" INTEGER NOT NULL,
    "jobOutlookUrl" TEXT NOT NULL,

    CONSTRAINT "Occupation_pkey" PRIMARY KEY ("anzsco")
);

-- CreateTable
CREATE TABLE "Provider" (
    "id" INTEGER NOT NULL,
    "asqaCode" TEXT NOT NULL,
    "providerName" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "governmentSubsidised" TEXT NOT NULL,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "suburb" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "geographicId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "url" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course_Provider" (
    "courseId" INTEGER NOT NULL,
    "campusId" INTEGER NOT NULL,

    CONSTRAINT "Course_Provider_pkey" PRIMARY KEY ("courseId","campusId")
);

-- CreateTable
CREATE TABLE "Course_Occupation" (
    "anzsco" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Course_Occupation_pkey" PRIMARY KEY ("anzsco","courseId")
);

-- CreateTable
CREATE TABLE "Division_Course" (
    "anzsicDivision" TEXT NOT NULL,
    "anzscoUnitGroup" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,

    CONSTRAINT "Division_Course_pkey" PRIMARY KEY ("anzsicDivision","courseCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseCode_key" ON "Course"("courseCode");

-- AddForeignKey
ALTER TABLE "Provider" ADD CONSTRAINT "Provider_geographicId_fkey" FOREIGN KEY ("geographicId") REFERENCES "Geolocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course_Provider" ADD CONSTRAINT "Course_Provider_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course_Provider" ADD CONSTRAINT "Course_Provider_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course_Occupation" ADD CONSTRAINT "Course_Occupation_anzsco_fkey" FOREIGN KEY ("anzsco") REFERENCES "Occupation"("anzsco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course_Occupation" ADD CONSTRAINT "Course_Occupation_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Division_Course" ADD CONSTRAINT "Division_Course_courseCode_fkey" FOREIGN KEY ("courseCode") REFERENCES "Course"("courseCode") ON DELETE RESTRICT ON UPDATE CASCADE;
