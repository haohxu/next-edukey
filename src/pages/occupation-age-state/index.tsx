import ProcessNavBar from "@/components/ProcessNavBar";
import DiagramMap from "@/components/occupation-age-state/DiagramMap";
import { Center, Container, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Fragment } from "react";

export default function OccupationAgeStatePage() {
  return (
    <Fragment>
      <Head>
        <title>Occupations VS Ages and States - EduKey</title>
      </Head>
      <ProcessNavBar
        processList={[
          
          {
            processNumber: 2,
            whichProcess: "Previous",
            title: "Occupations VS Qualifications",
            href: "/detailed-table",
          },
          {
            processNumber: 3,
            whichProcess: "Current",
            title: "Occupations VS Ages/States",
            href: "/occupation-age-state",
          },
          {
            processNumber: 4,
            whichProcess: "Next",
            title: "Explore Occupation Skills",
            href: "/occupations",
          },
        ]}
      />

      <Container maxWidth={"6xl"}>
        <Flex width={"inherit"} direction="column" alignItems={"center"}>
          <Center>
            <Heading>Occupations VS Age Groups and States</Heading>
          </Center>
          <Center maxW={"4xl"} paddingY={10}>
            <Heading
              fontSize={"xl"}
              color={"gray.500"}
              textAlign={"center"}
              lineHeight={"150%"}
            >
              {" "}
              Different occupations have different distributions across multiple
              age groups and Australian states. <br /> <br /> Find out your
              favorite occupations.{" "}
            </Heading>
          </Center>
        </Flex>
        <DiagramMap />
      </Container>
    </Fragment>
  );
}
