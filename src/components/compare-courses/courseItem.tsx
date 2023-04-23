import {
  Box,
  Center,
  Flex,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  Heading,
  AccordionIcon,
  AccordionPanel,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { course } from "@prisma/client";
import NextLink from "next/link";
import { MdBuild } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Dispatch, SetStateAction, useState } from "react";

export default function CourseItem(props: {
  courseItem: course;
  selectedCourses: course[];
  setSelectedCourses: Dispatch<SetStateAction<course[]>>;
}) {
  const courseItem = props.courseItem;
  const selectedCourses = props.selectedCourses;
  const setSelectedCourses = props.setSelectedCourses;

  // check if this course is already in selected courses
  const isInSelectedCourses =
    selectedCourses.find(
      (item) => item.course_code == courseItem.course_code
    ) === undefined
      ? false
      : true;

  // switch (add to or remove from) shortlist
  const setSelectedCoursesHandler = () => {
    setSelectedCourses((prevState) => {
      const checkSelectedCourses = prevState.find(
        (item) => item.course_code == courseItem.course_code
      );
      if (checkSelectedCourses !== undefined) {
        const newState = prevState.filter(
          (item) => item.course_code != checkSelectedCourses.course_code
        );
        return newState;
      } else if (prevState.length === 3) {
        return prevState;
      } else {
        const newState = [...prevState, courseItem];
        return newState;
      }
    });
  };

  return (
    <Center py={1}>
      <Box
        maxWidth={"1200px"}
        w={"full"}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={"lg"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        minH={"360px"}
      >
        <Stack>
          <Flex direction={{ base: "row" }}>
            <Text
              color={"blue.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {"Course"}
            </Text>
            <Spacer />
            {isInSelectedCourses ? (
              <Button
                rightIcon={<AiFillHeart />}
                variant={"solid"}
                colorScheme={"red"}
                size={"xs"}
                onClick={setSelectedCoursesHandler}
              >
                Remove from Shortlist
              </Button>
            ) : (
              <Button
                rightIcon={<AiOutlineHeart />}
                variant={"outline"}
                colorScheme={"red"}
                size={"xs"}
                onClick={setSelectedCoursesHandler}
              >
                Add to Shortlist
              </Button>
            )}
          </Flex>
          <NextLink
            href={"/courses/" + courseItem.course_code}
            passHref
            legacyBehavior
          >
            <Heading
              width={"fit-content"}
              as={"a"}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {courseItem.course_title}
            </Heading>
          </NextLink>
          <Text>
            {"Course Code: "}
            {courseItem.course_code}
          </Text>
          <Text color={"gray.500"}>
            {courseItem.description?.slice(0, 140) + "..."}
          </Text>
        </Stack>
        {/* <Accordion allowToggle >
        <AccordionItem border={'none'}>
          
            <AccordionButton 
              paddingLeft={'initial'} paddingTop={'2'}>
              <Box  flex='1' textAlign='left'>
              <Heading
                // color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                {props.job_name}
              </Heading>
              </Box>
              <Text fontSize={'sm'}>See Available Courses: &nbsp;</Text>
              <AccordionIcon />
            </AccordionButton>
              
          <AccordionPanel pb={4}>
            {props.course_occupation.map( (item: {course: course}) =>  
                (<CourseItem 
                  key={props.job_name + item.course.course_code}
                  course={item.course}
                  ></CourseItem>)
              )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion> */}
        {/* <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Text fontWeight={600}>Government Website: &nbsp;
          <Text as={'a'} href={props.job_outlook_url} fontWeight={500} >
             {props.job_outlook_url}
          </Text></Text>
          
          
        
      </Stack> */}
      </Box>
    </Center>
  );
}
