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
        <title>Detailed Table for Percentage of Different Qualification on One Occupation - EduKey </title>
      </Head>
    <Container maxWidth={"6xl"}>
      <Stack direction={"column"}>
        <Heading alignSelf={"center"}>Detailed Table</Heading>
        <Heading alignSelf={"center"} fontSize={"xl"}>for Percentage of Different Qualification on One Occupation</Heading>
        <DataTableComponent allTableData={tableData}/>
      </Stack>
    </Container>
    </Fragment>
  )

}

export const getStaticProps: GetStaticProps = async () => {
  // TODO: only find 18 items
  const tableData = await prisma.eduation_employment_data.findMany({});

  return {
    props: { tableData: tableData },
  };
};