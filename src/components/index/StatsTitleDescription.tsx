import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  Center,
  Stack,
  VStack,
  CircularProgress,
} from "@chakra-ui/react";

export default function StatsTitleDescription() {
  return (
    <Container py={5} maxW={"6xl"}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 3 }} marginBottom={6}>
          <Center as={VStack}>
            <Heading id={"homepage-stats-1-1412"} as={"h2"} paddingBottom={4}>
              DO YOU KNOW
            </Heading>
            <Heading as={"h2"} paddingBottom={4}>
              Among{" "}
              <Text as={"span"} color={"blue.500"}>
                all VET students
              </Text>{" "}
              graduated in 2022:
            </Heading>
            <Text fontSize={"sm"} fontWeight={"medium"} color={"gray.400"}>
              VET - Vocational Education Training
            </Text>
          </Center>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Flex direction={"row"}>
              <CircularProgress
                value={88}
                color={"blue.500"}
                size="50px"
                alignSelf={"center"}
              ></CircularProgress>
              <Text
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight={"bold"}
                color={"blue.500"}
                paddingX={3}
              >
                88%
              </Text>
            </Flex>
            <Box fontSize={{ base: "xl", md: "2xl" }} fontWeight={"semibold"}>
              Get employed after training
            </Box>
          </Flex>
        </GridItem>

        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Flex direction={"row"}>
              <CircularProgress
                value={74}
                color={"blue.500"}
                size={"50px"}
                alignSelf={"center"}
              ></CircularProgress>
              <Text
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight={"bold"}
                color={"blue.500"}
                paddingX={3}
              >
                74%
              </Text>
            </Flex>
            <Box fontSize={{ base: "xl", md: "2xl" }} fontWeight={"semibold"}>
              Found the training relevant to their current job.
            </Box>
          </Flex>
        </GridItem>

        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Flex direction={"row"}>
              <CircularProgress
                value={78}
                color={"blue.500"}
                size="50px"
                alignSelf={"center"}
              ></CircularProgress>
              <Text
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight={"bold"}
                color={"blue.500"}
                paddingX={3}
              >
                78%
              </Text>
            </Flex>
            <Box fontSize={{ base: "xl", md: "2xl" }} fontWeight={"semibold"}>
              Received at least one job-related benefit.
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}
