import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";
import CallToAction from "@/components/index/CallToAction";
import DiagramAndTableLink from "@/components/index/DiagramAndTableLink";
import ArticlePreview from "@/components/index/ArticlePreview";
import StatsTitleDescription from "@/components/index/StatsTitleDescription";

import { top_three_articles } from "@/lib/all_statistic_articles";
import Script from "next/script";
import FeatureGridNav from "@/components/index/FeatureGridNav";
import { useRef } from "react";

export default function IndexPage() {
  const statisticArticleList = top_three_articles();
  const featuresRef = useRef();

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
        <CallToAction featuresRef={featuresRef}></CallToAction>
        <Divider marginY={10}></Divider>
      </Container>
      <Container maxWidth={"6xl"}>
        <FeatureGridNav featuresRef={featuresRef} />
        <Divider marginY={10} />
        <StatsTitleDescription />
        <Divider marginY={10} />
        <DiagramAndTableLink />
        <Divider marginY={10} />
        <ArticlePreview articlePreview={statisticArticleList} />
      </Container>
    </>
  );
}
