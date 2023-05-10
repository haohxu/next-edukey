import {
  findAllOccupationDescriptions,
  newOccupation,
} from "@/lib/read_database";
import Head from "next/head";
import { Fragment } from "react";
import { Container, Heading } from "@chakra-ui/react";

import JobSkillMiniGame from "@/components/occupations/JobSkillMiniGame";

export default function OccupationsPage({
  occupationList,
}: {
  occupationList: newOccupation[];
}) {
  return (
    <Fragment>
      <Head>
        <title>Occupations And Skills</title>
      </Head>
      <Container maxWidth={"6xl"}>
        <Heading paddingTop={"20px"} paddingBottom={"20px"}>
          Occupations And Skills
        </Heading>
        <JobSkillMiniGame userChosenOccupation={occupationList[0]} occupationList={occupationList}/>
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
