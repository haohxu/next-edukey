import prisma from "@/lib/prisma";
import { Container, Heading, Text } from "@chakra-ui/react";
import { course } from "@prisma/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export default function courseDetailPage(props: {course_detail: course}) {
  const course_detail = props.course_detail
  
  return (
    <Container>
      <Heading>{course_detail.course_title}</Heading>
      <Text>{course_detail.course_code}</Text>
    </Container>
  )
}















interface Params extends ParsedUrlQuery {
  course_code: string,
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const course_code = params.course_code;

  let course_detail : course = {
    course_code: 'Not found',
    id: 0,
    course_title: "",
    qualification_level: "",
    course_type: "",
    government_subsidised: 0,
    apprenticeship: 0,
    traineeship: 0,
    entry_requirement: "",
    description: ""
  }

  const course_detail_res = await prisma.course.findUnique({
    where: {
      course_code: course_code,
    }
  })

  if (course_detail_res !== null) {
    course_detail = course_detail_res;
  }

  return {
    props: { course_detail }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const course_codes = await prisma.course.findMany({
    select: { course_code: true },
  });

  return {
    paths: course_codes.map((item) => ({
      params: { course_code: item.course_code },
    })),
    fallback: false,
  };
};
