import CompareGrid from "@/components/compare-courses/compareGrid";
import CourseItem from "@/components/compare-courses/courseItem";
import prisma from "@/lib/prisma";
import { findAllCourseNames } from "@/lib/read_database";
import {
  SearchIcon,
  Search2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Heading,
  Container,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Text,
  Button,
  FormControl,
  Flex,
  Spacer,
  Grid,
  GridItem,
  ButtonGroup,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Center,
  AvatarBadge,
  Badge,
  SimpleGrid,
  Fade,
  ScaleFade,
} from "@chakra-ui/react";
import { course } from "@prisma/client";

import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from "chakra-react-select";
import Head from "next/head";
import { Fragment, useState } from "react";

export default function CompareCoursesPage(props: {
  courseNameList: string[];
  courseList: course[];
}) {
  const courseNameList = props.courseNameList;
  const courseList = props.courseList;

  const courseOptions = courseNameList.map((item) => ({
    value: item,
    label: item,
  }));

  // manage useState of compare button
  const [showCompare, setShowCompare] = useState(false);

  const toggleShowCompareHandler = () => {
    setShowCompare((prevState) => !prevState);
  };

  // manage useState of selected courses
  // lift this state to courseItem class
  const [selectedCourses, setSelectedCourses] = useState([
    courseList[0],
    // courseList[1],
    // courseList[2],
    // courseList[3],
  ]);

  // with above, handle event of tag cancel button
  const tagCloseDoer = (currentButtonLable: string) => {
    setSelectedCourses((prevState) => {
      const newState = prevState.filter(
        (item) => item.course_code != currentButtonLable
      );
      return newState;
    });
  };

  // manage useState of filtered courses
  const [displayCourses, setDisplayCourses] = useState({
    maxNumPerPage: 9,
    leftIndex: 0,
    currentPageNum: 1,
  });
  const [filteredCourses, setFilteredCourses] = useState(courseList);

  // with above, manage event of input (search) box
  const changeInputHandler = (event: { target: { value: string } }) => {
    // trim input, use lowercase to match
    const currentInputValue = event.target.value.trim().toLowerCase();
    console.log(currentInputValue);

    setFilteredCourses((prevState) => {
      if (currentInputValue == "") {
        return courseList;
      } else {
        try {
          const newState = courseList.filter(
            (item) =>
              item.course_title.toLowerCase().match(currentInputValue) !== null
          );
          return newState;
        } catch (e) {
          console.error(e);
          return prevState;
        }
      }
      return prevState;
    });
  };

  // with above, manage event of previous, next page of courses
  const changePageNumHandler = (event: any) => {
    const currentButton = (event.target.id as string).toLowerCase();
    const maxPageNum = Math.ceil(
      filteredCourses.length / displayCourses.maxNumPerPage
    );
    if (
      currentButton === "button-go-l-page-1314" &&
      displayCourses.currentPageNum > 1
    ) {
      setDisplayCourses((prevState) => ({
        ...prevState,
        leftIndex: prevState.leftIndex - prevState.maxNumPerPage,
        currentPageNum: prevState.currentPageNum - 1,
      }));
    }
    if (
      currentButton === "button-go-r-page-1314" &&
      displayCourses.currentPageNum < maxPageNum
    ) {
      setDisplayCourses((prevState) => ({
        ...prevState,
        leftIndex: prevState.leftIndex + prevState.maxNumPerPage,
        currentPageNum: prevState.currentPageNum + 1,
      }));
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Compare Courses</title>
      </Head>
      <Container marginTop={{ base: "6" }} maxWidth={"6xl"}>
        <Stack direction={"column"}>
          {/* TODO: for Testing */}
          {/* <HStack>
            <Text fontSize={"2xs"} color={"red.500"}>
              {"Testing: " + showCompare} &nbsp;
            </Text>
            <Text fontSize={"2xs"} color={"red.500"}>
              {"filtered Course Length " + filteredCourses.length} &nbsp;
            </Text>
            {selectedCourses.map((item) => (
              <Text
                key={"testing" + item.course_code}
                fontSize={"2xs"}
                color={"red.500"}
              >
                {item.course_code} &nbsp;
              </Text>
            ))}
          </HStack> */}

          {/* Compare title and Compare button */}
          <Flex
            direction={{ base: "row", md: "row" }}
            paddingY={{ base: 6, sm: 6, md: 12 }}
          >
            <Heading fontSize={{ base: "2xl", sm: "3xl", md: "3xl" }}>
              Compare Different Courses
            </Heading>
            <Spacer />

            <Button
              isDisabled={selectedCourses.length <= 1 && !showCompare}
              size={{ base: "sm", sm: "sm", md: "md" }}
              width={"fit-content"}
              alignSelf={"flex-end"}
              colorScheme={"blue"}
              onClick={toggleShowCompareHandler}
            >
              {showCompare ? "Back" : "Compare"}
              <Badge
                fontSize={"xs"}
                marginLeft={2}
                colorScheme={"red"}
                variant={"solid"}
                borderRadius={"full"}
              >
                {selectedCourses.length}
              </Badge>
            </Button>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }}>
            <Flex direction={"row"}>
              {selectedCourses.map((item) => (
                <ScaleFade key={"fade-tag-" + item.course_code} in={true} initialScale={0.95}>
                <Tag
                  key={"tag-" + item.course_code}
                  width={"fit-content"}
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight={"bold"}
                  marginX={1}
                  borderRadius={"md"}
                  variant={"solid"}
                  colorScheme={"blue"}
                >
                  <TagLabel>{item.course_code} &nbsp;</TagLabel>
                  <TagCloseButton
                    type={"button"}
                    onClick={() => tagCloseDoer(item.course_code)}
                  />
                </Tag>
                </ScaleFade>
              ))}
            </Flex>

            <Spacer />
            {/* for showCase = false */}
            {!showCompare && (
              <Fade in={!showCompare}>
                <Flex direction={"row"}>
                  <InputGroup minWidth={{ md: "sm" }} marginX={1}>
                    <InputLeftElement
                      pointerEvents={"none"}
                      // color={"gray.300"}
                      // fontSize={"1.2em"}
                    >
                      <SearchIcon color={"gray.300"} />
                    </InputLeftElement>
                    <Input
                      placeholder="Search a Course Name..."
                      size={{ base: "md" }}
                      variant="outline"
                      onChange={changeInputHandler}
                    />
                  </InputGroup>
                  <ButtonGroup
                    flexDirection={"row"}
                    spacing={1}
                    size={{ base: "xs", sm: "md" }}
                    alignItems={"center"}
                  >
                    <Button
                      id="button-go-l-page-1314"
                      onClick={changePageNumHandler}
                    >
                      {"<"}{/* <ChevronLeftIcon /> */}
                    </Button>
                    <Button as={"p"}>
                      {displayCourses.currentPageNum +
                        " / " +
                        Math.ceil(
                          filteredCourses.length / displayCourses.maxNumPerPage
                        )}
                    </Button>
                    <Button
                      id="button-go-r-page-1314"
                      onClick={changePageNumHandler}
                    >
                      {">"}{/* <ChevronRightIcon /> */}
                    </Button>
                  </ButtonGroup>
                </Flex>
              </Fade>
            )}
          </Flex>

          {/* for showCompare = false */}
          {!showCompare && filteredCourses.length === 0 && (
            <Center marginY={20} paddingY={20}>
              <Heading>No Courses Found...</Heading>
            </Center>
          )}
          {!showCompare && (
            <ScaleFade in={!showCompare} initialScale={0.95}>
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3 }}
                spacingX={"20px"}
                spacingY={"20px"}
              >
                {filteredCourses
                  .slice(
                    displayCourses.leftIndex,
                    Math.min(
                      filteredCourses.length,
                      displayCourses.leftIndex + displayCourses.maxNumPerPage
                    )
                  )
                  .map((course) => (
                    <CourseItem
                      key={"course-" + course.id + "-" + course.course_code}
                      courseItem={course}
                      selectedCourses={selectedCourses}
                      setSelectedCourses={setSelectedCourses}
                    />
                  ))}
              </SimpleGrid>
            </ScaleFade>
          )}
        </Stack>

        {/* for showCompare = true */}
        {selectedCourses.length === 0 && showCompare && (
          <Center marginY={20} paddingY={20}>
            <Heading>No Courses Selected</Heading>
          </Center>
        )}
        {selectedCourses.length !== 0 && showCompare && (
          <ScaleFade in={showCompare} initialScale={0.95}>
            <CompareGrid selectedCourses={selectedCourses}></CompareGrid>
          </ScaleFade>
        )}
      </Container>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const courseNameList = await findAllCourseNames();

  // TODO: only find 18 items
  // const course_res = await prisma.course.findMany({
  //   where: {
  //     id: { lte: 30 },
  //   },
  // });

  const course_res = await prisma.course.findMany({});

  return {
    props: {
      courseNameList: courseNameList,
      courseList: course_res,
    },
  };
};
