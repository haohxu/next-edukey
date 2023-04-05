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
} from "@chakra-ui/react";
import Head from "next/head";
import { useQuizResultStore } from "../_app";

export default function QuizResultPage() {
  const { quizResultResponse, setQuizResultResponse } = useQuizResultStore();
  const divisionList = quizResultResponse;

  return (
    <>
      <Head>
        <title>Quiz Result</title>
      </Head>
      <Center>
        <Heading marginY={"8"}>Result</Heading>
      </Center>
      <Container maxWidth={"1200px"}>
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
                fontSize={{base: "2xs", sm:"xs", md: "sm"}}
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
                    anzsco: any;
                    job_name: any;
                    job_outlook_url: any;
                    course_occupation: any;
                  }) => (
                    <OccupationItem
                      key={
                        "occupation" + item.anzsic_division + occupation.anzsco
                      }
                      job_name={occupation.job_name}
                      job_outlook_url={occupation.job_outlook_url}
                      course_occupation={occupation.course_occupation}
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
