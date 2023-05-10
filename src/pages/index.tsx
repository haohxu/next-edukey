import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";
import CallToAction from "@/components/index/CallToAction";
import DiagramAndTableLink from "@/components/index/DiagramAndTableLink";
import ArticlePreview from "@/components/index/ArticlePreview";
import StatsTitleDescription from "@/components/index/StatsTitleDescription";

import { top_three_articles } from "@/lib/all_statistic_articles";
import Script from "next/script";

export default function IndexPage() {
  const statisticArticleList = top_three_articles();

  return (
    <>
      <Head>
        <title>EduKey</title>
        {/* <Script
          type="text/javascript"
          src="src=”https://public.tableau.com/javascripts/api/tableau-2.min.js"
        ></Script> */}
      </Head>
      <Container maxWidth={"full"} marginX={0} paddingX={0}>
        <CallToAction></CallToAction>
        <Divider marginY={10}></Divider>
      </Container>
      <Container maxWidth={"6xl"}>
        <StatsTitleDescription />
        <Divider marginY={10}></Divider>
        <DiagramAndTableLink />
        <Divider marginY={10}></Divider>
        <ArticlePreview articlePreview={statisticArticleList} />
      </Container>
    </>
  );
}
