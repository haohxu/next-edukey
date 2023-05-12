import {
  findAllOccupationDescriptions,
  newOccupation,
} from "@/lib/read_database";
import Head from "next/head";
import { Fragment, useState } from "react";
import {
  Badge,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

import JobSkillMiniGame from "@/components/occupations/JobSkillMiniGame";
import OccupationCardGrid from "@/components/occupations/OccupationCardGrid";

export default function OccupationsPage({
  occupationList,
}: {
  occupationList: newOccupation[];
}) {
  const [currentOccupation, setCurrentOccupation] = useState<
    newOccupation | undefined
  >(undefined);

  const [showGameProcess, setShowGameProcess] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Occupations And Skills</title>
      </Head>
      <Container maxWidth={"6xl"}>
        <Flex
          width={"inherit"}
          direction={"row"}
          paddingTop={"20px"}
          paddingBottom={"20px"}
        >
          <Heading>Occupations And Skills</Heading>
          <Spacer />
          <Button
            isDisabled={currentOccupation === undefined}
            size={"sm"}
            width={"fit-content"}
            colorScheme={"purple"}
            onClick={() => setShowGameProcess((prevState) => !prevState)}
          >
            {showGameProcess ? "Back to Occupation List" : "Start Game"}
            <Badge
              fontSize={"xs"}
              marginLeft={2}
              colorScheme={"whatsapp"}
              variant={"solid"}
              borderRadius={"full"}
            >
              {currentOccupation ? 1 : 0}
            </Badge>
          </Button>
        </Flex>
        {!showGameProcess && (
          <OccupationCardGrid
            occupationList={occupationList}
            currentOccupation={currentOccupation}
            setCurrentOccupation={setCurrentOccupation}
          />
        )}
        {showGameProcess && (
          <JobSkillMiniGame
            userChosenOccupation={currentOccupation ? currentOccupation : occupationList[0]}
            occupationList={occupationList}
          />
        )}
      </Container>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const occupationDescriptionList = await findAllOccupationDescriptions();

  return {
    props: {
      occupationList: occupationDescriptionList,
    },
  };
};
