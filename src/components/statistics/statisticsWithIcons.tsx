import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";

function statsTitleDescription() {
  return (
    <Container py={5} maxW={"container.lg"} paddingTop={"20"}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 3 }} marginBottom={6}>
          <Heading as={"h2"} paddingBottom={4}>
            Do You Know:{" "}
          </Heading>
          <Heading as={"h2"} paddingBottom={4}>
            Among{" "}
            <Text as={"span"} color={"blue.500"}>
              All VET Students
            </Text>{" "}
            Graduated in 2022,
          </Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Text fontSize={"4xl"} fontWeight={"bold"} color={"blue.500"}>
              88%
            </Text>
            <Box fontSize={"lg"}>Get employed after training</Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Text fontSize={"4xl"} fontWeight={"bold"} color={"blue.500"}>
              74%
            </Text>
            <Box fontSize={"lg"}>
              Get employed after training: found the training relevant to their
              current job.
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={"column"}>
            <Text fontSize={"4xl"} fontWeight={"bold"} color={"blue.500"}>
              78%
            </Text>
            <Box fontSize={"lg"}>
              Get employed after training: received at least one job-related
              benefit.
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default statsTitleDescription;
