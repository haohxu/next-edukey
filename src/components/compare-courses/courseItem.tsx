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
  useToast,
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

  // create custom Toast() to notify no more than 3 can be chosen
  const toast = useToast();
  const toastNotification = () => {
    if (! toast.isActive("no-more-than-3")){
      toast({
        id: "no-more-than-3",
        position: "top-right",
        title: "You Cannot Select More Than 3 Courses",
        status: "info",
        variant: "left-accent",
        duration: 2500,
        isClosable: true,
      });
    }
    
  };

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
      } else if (prevState.length >= 3) {
        toastNotification();
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
          <Flex direction={{ base: "row", sm: "row", md: "row" }}>
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
                Remove
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
            <Heading
              width={"fit-content"}
              as={"a"}
              fontSize={{base: "lg", md: "2xl"}}
              fontFamily={"body"}
            >
              {courseItem.course_title}
            </Heading>
          
          <Text>
            {"Course Code: "}
            {courseItem.course_code}
          </Text>
          <Text color={"gray.500"}>
            {courseItem.description?.slice(0, 140) + "..."}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
