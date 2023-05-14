import {
  CircularProgress,
  CircularProgressLabel,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Fragment } from "react";
import ChakraNextLink from "./chakra-next-link";

const ProcessNavCard = ({
  processNumber,
  whichProcess,
  title,
  href,
}: {
  processNumber: number;
  whichProcess: string;
  title: string;
  href: string;
}) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      textAlign={{ base: "center", md: "left" }}
    >
      <CircularProgress
        value={whichProcess === "Current" ? 100 : 0}
        color="blue.500"
        display={
          whichProcess === "Current" ? "block" : { base: "none", md: "block" }
        }
      >
        <CircularProgressLabel fontWeight={"bold"} fontSize={"lg"}>
          {processNumber}
        </CircularProgressLabel>
      </CircularProgress>
      <Flex
        direction={"column"}
        // maxW={"lg"}
        paddingLeft={"5px"}
      >
        {whichProcess !== "Current" && (
          <Heading fontSize={"sm"} color={"blue.600"}>
            {whichProcess}
          </Heading>
        )}

        <Heading
          fontSize={
            whichProcess === "Current" ? "sm" : { base: "2xs", sm: "sm" }
          }
        >
          <ChakraNextLink href={href}>{title}</ChakraNextLink>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default function ProcessNavBar({
  processList,
}: {
  processList: {
    processNumber: number;
    whichProcess: string;
    title: string;
    href: string;
  }[];
}) {
  const thePrev = processList[0];
  const theCurrent = processList[1];
  const theNext = processList[2];
  return (
    <Fragment>
      <Container maxW={"6xl"}>
        <SimpleGrid
          columns={{ base: 3, md: 5 }}
          spacing={10}
          alignItems={"center"}
          paddingTop={"10px"}
          paddingBottom={"20px"}
          overflow={{ base: "auto" }}
        >
          <ProcessNavCard {...thePrev} />
          <Divider
            orientation="horizontal"
            display={{ base: "none", md: "block" }}
          />
          <ProcessNavCard {...theCurrent} />
          <Divider
            orientation="horizontal"
            display={{ base: "none", md: "block" }}
          />
          <ProcessNavCard {...theNext} />
        </SimpleGrid>
      </Container>
    </Fragment>
  );
}
