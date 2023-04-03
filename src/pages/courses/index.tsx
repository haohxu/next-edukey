import CourseItem from "@/components/courses/courseItem";
import prisma from "@/lib/prisma";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { course } from "@prisma/client";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";


export default function CoursesPage (props: {courseList: course[]}) {
  const courseList = props.courseList
  
  return (
  <Container maxW={'1200px'} marginY={6}>
    <Center>
    <Heading marginY={6}>Course List</Heading>
    </Center>
    {courseList.map( (course) => (
      <CourseItem 
        key={'course-' + course.id + '-' + course.course_code} 
        courseItem={course} />
    ) )}
  </Container>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  // TODO: only find 18 items
  const course_res = await prisma.course.findMany({
    where: {
      id: {lte: 30},
    }
  })

  return {
    props: {courseList: course_res}
  }
}