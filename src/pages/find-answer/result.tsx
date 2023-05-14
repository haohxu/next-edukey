import OccupationItem from "@/components/find-answer/occupationItem";
import {
  Center,
  Heading,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Button,
  Badge,
  Spacer,
  ScaleFade,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useQuizResultStore } from "@/context/QuizResultStore";
import { useCompareCoursesStore } from "@/context/CompareCoursesStore";
import { course, occupation_growth } from "@prisma/client";
import ProcessNavBar from "@/components/ProcessNavBar";

export default function QuizResultPage() {
  const { quizResultResponse: divisionList, setQuizResultResponse } =
    useQuizResultStore();
  const {
    compareCoursesResponse: selectedCourses,
    setCompareCoursesResponse: setSelectedCourses,
  } = useCompareCoursesStore();

  // with above, handle event of tag cancel button
  const tagCloseDoer = (currentButtonLable: string) => {
    setSelectedCourses((prevState: course[]) => {
      const newState = prevState.filter(
        (item) => item.course_code != currentButtonLable
      );
      return newState;
    });
  };

  return (
    <>
      <Head>
        <title>Result - Find Course - EduKey</title>
      </Head>
      <ProcessNavBar
          processList={[
            {
              processNumber: 0,
              whichProcess: "Home",
              title: "Back To Home Page",
              href: "/",
            },
            {
              processNumber: 1,
              whichProcess: "Current",
              title: "Find Suitable Pathways",
              href: "/find-answer/result",
            },
            {
              processNumber: 2,
              whichProcess: "Next",
              title: "Occupations VS Qualifications",
              href: "/detailed-table",
            },
          ]}
        />
      <Container maxWidth={"6xl"}>
        <Center>
          <Heading marginY={"8"}>Result of Occupation and Courses</Heading>
        </Center>
        <Flex
          width={"inherit"}
          direction={{ base: "column", md: "row" }}
          paddingY={"10px"}
          
        >
          <Flex direction={"row"} paddingY={"5px"}>
            {selectedCourses.map((item) => (
              <ScaleFade
                key={"fade-tag-" + item.course_code}
                in={true}
                initialScale={0.95}
              >
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
          <Button
            as={NextLink}
            href={"/compare-courses"}
            isDisabled={selectedCourses.length <= 1}
            size={"sm"}
            width={"fit-content"}
            alignSelf={"flex-end"}
            colorScheme={"blue"}
          >
            {"Go To Compare"}
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

        <Tabs
          isFitted
          align="center"
          variant="soft-rounded"
          colorScheme={"blue"}
        >
          <TabList mb="1em" overflow={"auto"}>
            {divisionList.map((item: any) => (
              <Tab
                key={"division-" + item.anzsic_division}
                // minWidth={"200"}
                maxWidth={"500"}
                fontSize={{ base: "2xs", sm: "xs", md: "sm" }}
              >
                {item.anzsic_division}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {divisionList.map((item: any) => (
              <TabPanel key={"division-tabpanel" + item.anzsic_division}>
                {item.division_course.map(
                  (occupation: {
                    anzsco: string;
                    job_name: string;
                    course_occupation: any;
                    occupation_growth: occupation_growth;
                  }) => (
                    <OccupationItem
                      key={
                        "occupation" + item.anzsic_division + occupation.anzsco
                      }
                      anzsco={occupation.anzsco}
                      job_name={occupation.job_name}
                      course_occupation={occupation.course_occupation}
                      occupation_growth={occupation.occupation_growth}
                    ></OccupationItem>
                  )
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}
