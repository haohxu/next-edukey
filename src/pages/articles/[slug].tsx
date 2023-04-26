import React, { Fragment } from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Center,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import all_statistic_articles, {
  StatisticArticleType,
} from "@/lib/all_statistic_articles";
import Head from "next/head";

const ArticleDetailPage = (props: { article: StatisticArticleType }) => {
  const article = props.article;

  return (
    <Fragment>
      <Head>
        <title>Article - {article.title}</title>
      </Head>
    
    <Container maxW={"7xl"} p="12">
      <Heading as="h2" marginTop="5">
        {article.title}
      </Heading>
      <Divider marginY="5" />
      <Center>
      <Image
        borderRadius="sm"
        src={article.image}
        alt="text"
        objectFit="contain"
      />
      </Center>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        {/* <Heading as="h2">What we write about</Heading> */}
        {article.content.map((item, index) => (
          <Text as="p" fontSize="xl" key={index.toString()}>
            {item}
          </Text>
        ))}
      </VStack>
    </Container>
    </Fragment>
  );
};

export default ArticleDetailPage;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const articleList = all_statistic_articles();
  const articleID: number = Number.parseInt(params.slug);

  const article: StatisticArticleType = articleList[articleID];

  return {
    props: { article: article },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleList = all_statistic_articles();

  const articleIDs = articleList.map((item) => item.id);

  return {
    paths: articleIDs.map((item) => ({
      params: { slug: item.toString() },
    })),
    fallback: false,
  };
};
