import { GetStaticProps } from "next";
import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";
import prisma from "@/lib/prisma";
import { eduation_employment_data } from "@prisma/client";
import CallToAction from "@/components/index/CallToAction";
import DiagramAndTable from "@/components/index/DiagramAndTable";
import ArticlePreview from "@/components/index/ArticlePreview";
import StatsTitleDescription from "@/components/index/StatsTitleDescription";

import { top_three_articles } from "@/lib/all_statistic_articles";

export default function IndexPage(props: {
  tableData: eduation_employment_data[];
}) {
  const tableData = props.tableData;

  const statisticArticleList = top_three_articles();

  return (
    <>
      <Head>
        <title>EduKey</title>
      </Head>
      <Container maxWidth={"6xl"}>
        <CallToAction></CallToAction>
        <Divider marginY={10}></Divider>
        <StatsTitleDescription />
        <Divider marginY={10}></Divider>
        <DiagramAndTable tableData={tableData} />
        <Divider marginY={10}></Divider>
        <ArticlePreview articlePreview={statisticArticleList} />
        
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // TODO: only find 18 items
  const tableData = await prisma.eduation_employment_data.findMany({});

  return {
    props: { tableData: tableData },
  };
};
