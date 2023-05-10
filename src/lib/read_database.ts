import prisma from "@/lib/prisma";
import {
  occupation_competency,
  occupation_description,
  occupation_task,
  occupation_techtool,
} from "@prisma/client";
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

  const courseNameList: string[] = courseTitleList.map(
    (item) => item.course_title
  );

  // console.log("Course Name Length: " + courseNameList.length);
  // console.log(courseNameList.slice(0, 15));

  return courseNameList;
};

export type newOccupation = occupation_description & {
  occupation_competencies: occupation_competency[];
  occupation_tasks: occupation_task[];
  occupation_techtools: occupation_techtool[];
};

export const findAllOccupationDescriptions = async () => {
  const occupationDescriptionList =
    await prisma.occupation_description.findMany({
      include: {
        occupation_competencies: {
          orderBy: [{ competency_score: "desc" }, { core_competency: "asc" }],
        },
        occupation_tasks: {
          orderBy: [
            { time_spent_percentage: "desc" },
            { specialist_task: "asc" },
          ],
        },
        occupation_techtools: {
          orderBy: [{ emerging_trending: "asc" }, { technology_tool: "asc" }],
        },
      },
      orderBy: [{ occupation_type: "asc" }, { anzsco_code: "asc" }],
    });

  return occupationDescriptionList;
};
