import ProcessNavBar from "@/components/ProcessNavBar";
import DataTableComponent from "@/components/detailed-table/DataTableComponent";
import prisma from "@/lib/prisma";
import { Container, Stack, Heading } from "@chakra-ui/react";
import { eduation_employment_data } from "@prisma/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Fragment } from "react";


export default function DetailedTablePage(props: {
  tableData: eduation_employment_data[];
}) {

  const tableData = props.tableData;

  return (
    <Fragment>
      <Head>
        <title>Detailed Table - Occupation vs Qualification - EduKey </title>
      </Head>
      <ProcessNavBar
          processList={[
            
            {
              processNumber: 1,
              whichProcess: "Previous",
              title: "Find Suitable Pathways",
              href: "/find-answer",
            },
            {
              processNumber: 2,
              whichProcess: "Current",
              title: "Occupations VS Qualifications",
              href: "/detailed-table",
            },
            {
              processNumber: 3,
              whichProcess: "Next",
              title: "Occupations VS Ages/States",
              href: "/occupation-age-state",
            },
          ]}
        />
    <Container maxWidth={"8xl"}>
      <Stack direction={"column"} spacing={"20px"} paddingY={"20px"}>
        <Heading alignSelf={"center"}>Detailed Table - Occupation vs Qualification</Heading>
        <Heading alignSelf={"center"} fontSize={"xl"} paddingBottom={"30px"}>for Percentage of Different Qualification on One Occupation</Heading>
        <DataTableComponent allTableData={tableData}/>
      </Stack>
    </Container>
    </Fragment>
  )

}

export const getStaticProps: GetStaticProps = async () => {
  const tableData = await prisma.eduation_employment_data.findMany({});

  return {
    props: { tableData: tableData },
  };
};