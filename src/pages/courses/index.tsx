import CourseItem from "@/components/courses/courseItem";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import prisma from "@/lib/prisma";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { course } from "@prisma/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Fragment, useState } from "react";

export default function CoursesPage(props: { courseList: course[] }) {
  // Create state to store number of products to display
  const [displayProducts, setDisplayProducts] = useState(10);

  // Invoke our custom hook
  // useInfiniteScroll(
  //   {
  //     trackElement: "#courses-bottom-27149",
  //     containerElement: "#container-element-27149",
  //     multiplier: 1,
  //   },
  //   () => {
  //     setDisplayProducts((oldVal) => oldVal + 5);
  //   }
  // );

  const courseList = props.courseList;

  return (
    <Fragment>
      <Head>
        <title>Course List</title>
      </Head>
      <Container id="container-element-27149" maxW={"1200px"} marginY={6}>
        <Center>
          <Heading marginY={6}>Course List</Heading>
        </Center>
        {courseList.slice(0, displayProducts).map((course) => (
          <CourseItem
            key={"course-" + course.id + "-" + course.course_code}
            courseItem={course}
          />
        ))}
        <Box id="courses-bottom-27149"></Box>
      </Container>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // TODO: only find 18 items
  const course_res = await prisma.course.findMany({
    where: {
      id: { lte: 30 },
    },
  });

  return {
    props: { courseList: course_res },
  };
};
