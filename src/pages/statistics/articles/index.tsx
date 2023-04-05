import React from "react";
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
} from "@chakra-ui/react";
import all_statistic_articles, { StatisticArticleType } from "@/lib/all_statistic_articles";
import NextLink from 'next/link';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: string;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date}</Text>
    </HStack>
  );
};

const ArticleBlock = (props: {article: StatisticArticleType}) => {

  const article = props.article;

  return (
    <Container maxW={"7xl"} p="10" marginY={'1'} paddingY={'1'}>
      <Box
        marginTop={{ base: "1" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            
              <Image
                borderRadius="lg"
                src={article.image}
                alt="some good alt text"
                objectFit="contain"
              />
            
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={
                'radial(blue.600 1px, transparent 1px)'
              }
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", md: "0" }}
          paddingTop={{base: "3", md: "0"}}
        >
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          <NextLink 
            href={'/statistics/articles/'+ article.id}
            passHref
            legacyBehavior>
          <Heading as={'a'} marginTop="1">
              {article.title}
            
          </Heading>
          </NextLink>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            {article.description}
          </Text>
          {/* <BlogAuthor name="John Doe" date={article.dateTime} /> */}
        </Box>
        <Box>
          <Divider color={'black.500'} paddingY={'3'}></Divider>
        </Box>
      </Box>
    </Container>
  );
};

const StatisticsArticleList = () => {
  const articleList = all_statistic_articles();

  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Informative Reads</Heading>
      </Container>
      {articleList.map( (item) => (
        <ArticleBlock key={item.id}  article={item}/>
      ) )}
    </>
  );
};

export default StatisticsArticleList;
