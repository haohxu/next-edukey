import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { course } from "@prisma/client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useCompareCoursesStore } from "@/context/CompareCoursesStore";

const SelectFavIconButton = ({ course } : {course: course}) => {
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
  
  const {
    compareCoursesResponse: selectedCourses,
    setCompareCoursesResponse: setSelectedCourses,
  } = useCompareCoursesStore();

  const isInSelectedCourses =
    selectedCourses.find((item) => item.course_code == course.course_code) ===
    undefined
      ? false
      : true;

  const setSelectedCoursesHandler = () => {
    setSelectedCourses((prevState : course[]) => {
      const checkSelectedCourses = prevState.find(
        (item) => item.course_code == course.course_code
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
        const newState = [...prevState, course];
        return newState;
      }
    });
  };

  return (
    <IconButton
      bgColor={"transparent"}
      size={"xs"}
      color={"red.500"}
      variant="solid"
      icon={isInSelectedCourses ? <AiFillHeart /> : <AiOutlineHeart />}
      _hover={{
        colorScheme: "red.500",
        backgroundColor: "transparent",
      }}
      aria-label={"FavoriteIcon" + course.course_code}
      onClick={setSelectedCoursesHandler}
    />
  );
};


const CourseItem = (props: { course: course }) => {
  return (
    <>
      <Flex>
        <Box textAlign={"left"}>
          <Text fontSize={{ base: "sm", md: "md" }}>
            <SelectFavIconButton course={props.course} />
            {" - "}
            <Link as={NextLink} href={"/courses/" + props.course.course_code}>
              {props.course.course_title + " " + "(" + props.course.course_code + ")" }
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default function OccupationItem(props: any) {
  return (
    <Center py={1}>
      <Box
        maxW={"1200px"}
        w={"full"}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={"lg"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"blue.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
            align="start"
          >
            Occupation
          </Text>
          {/* <Heading
          fontSize={'2xl'}
          fontFamily={'body'}>
          {props.job_name}
        </Heading> */}
          {/* <Text color={'gray.500'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum.
        </Text> */}
        </Stack>
        <Accordion allowToggle>
          <AccordionItem border={"none"}>
            <AccordionButton paddingLeft={"initial"} paddingTop={"2"}>
              <Box flex="1" textAlign="left">
                <Heading
                  // color={useColorModeValue('gray.700', 'white')}
                  fontSize={{ base: "md", md: "2xl" }}
                  fontFamily={"body"}
                >
                  {props.job_name}
                </Heading>
              </Box>
              <Text fontSize={{ base: "xs", md: "sm" }}>
                See Available Courses: &nbsp;
              </Text>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              {props.course_occupation.map((item: { course: course }) => (
                <CourseItem
                  key={props.job_name + item.course.course_code}
                  course={item.course}
                ></CourseItem>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          {/* <Text fontWeight={600}>
            Government Website: &nbsp;
            <Text as={"a"} href={props.job_outlook_url} fontWeight={500}>
              {props.job_outlook_url}
            </Text>
          </Text> */}
        </Stack>
      </Box>
    </Center>
  );
}
