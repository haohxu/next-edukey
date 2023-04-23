import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export const HelloWorld = () => {
  return JSON.stringify({
    value: "Hi, PostgreSQL!",
  });
};

export const findAllCourseNames = async () => {
  // const occupationResult = await prisma.division.findMany({
  //   where: { anzsic_division: {in: divisionANZList} },
  //   include: {
  //     division_course: {
  //       include : {
  //         course: {
  //           include : {
  //             course_occupation: {
  //               include: {
  //                 occupation: true }}}}}}},

  // });

  const courseTitleList = await prisma.course.findMany({
    select: {
      course_title: true,
    },
  });

  const courseNameList: string[] = courseTitleList.map((item) => 
    item.course_title
  );

  console.log("Course Name Length: " + courseNameList.length)
  console.log(courseNameList.slice(0, 15));

  return courseNameList;
};
