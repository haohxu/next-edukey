import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { StatisticArticleType } from "@/lib/all_statistic_articles";
import NextLink from "next/link";

const BlogPostWithImage = (props: { article: StatisticArticleType }) => {
  const article = props.article;

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        minH={"400px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        {/* <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        ></Box> */}
        <Stack>
          <Text
            color={"blue.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Reads
          </Text>
          <NextLink href={'/statistics/articles/' + article.id} passHref legacyBehavior >
          <Heading as={'a'} color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
            {article.title}
            {/* Boost your conversion rate */}
          </Heading>
          </NextLink>
          <Text color={"gray.500"}>
            {article.description}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          {/* <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          /> */}
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{article.author}</Text>
            <Text color={"gray.500"}>{article.dateTime} · {article.timeToRead} read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default function ArticlePreview(props: {
  articlePreview: StatisticArticleType[];
}) {
  const articlePreviewList = props.articlePreview;

  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Related Articles
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
        {articlePreviewList.map((item) => (
          <BlogPostWithImage key={item.id} article={item} />
        ))}
      </SimpleGrid>
      <Center marginY={'6'}>
        <NextLink href={"/statistics/articles"} passHref legacyBehavior>
          <Button variant={"link"} color={"blue.500"} fontSize={'lg'}>
            Read More
          </Button>
        </NextLink>
      </Center>
    </Box>
  );
}
