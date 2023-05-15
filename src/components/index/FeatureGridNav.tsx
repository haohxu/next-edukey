import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcApproval,
  FcAssistant,
  FcBriefcase,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcMindMap,
  FcReading,
  FcServices,
  FcSupport,
} from "react-icons/fc";
import ChakraNextLink from "../chakra-next-link";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const FeatureCard = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <ChakraNextLink href={href} color="blue.500" fontWeight={"bold"} fontSize={"sm"}>Learn more</ChakraNextLink>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function FeatureGridNav({featuresRef} : {featuresRef: any}) {
  return (
    <Box p={4} id="homepage-feature-grid-nav-1412" ref={featuresRef}>
      <Stack spacing={4} as={Container} maxW={"6xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
          fontWeight={"bold"}
        >
          Features and Process
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Here are recommended processes to use EduKey web application.
        </Text>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          <ChakraNextLink href={"/find-answer"}>
            {" "}
            {"1. Find Suitable Pathways"}{" "}
          </ChakraNextLink>
          {<ChevronRightIcon />}{" "}
          <ChakraNextLink href={"/detailed-table"}>
            {" "}
            {"2. Occupation VS Qualification"}
          </ChakraNextLink>
          {<ChevronRightIcon />}{" "}
          <ChakraNextLink href={"/occupation-age-state"}>
            {"3. Occupation VS Age Groups / Australian States"}
          </ChakraNextLink>
          {<ChevronRightIcon />}{" "}
          <ChakraNextLink href={"/occupations"}>
            {"4. Explore Occupation Skills"}{" "}
          </ChakraNextLink>
          {<ChevronRightIcon />}{" "}
          <ChakraNextLink href={"/compare-courses"}>
            {"5. Compare Different Courses"}
          </ChakraNextLink>
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <FeatureCard
            heading={"1. Find Suitable Pathways"}
            icon={<Icon as={FcBriefcase} w={10} h={10} />}
            description={"Based on your interests and strengths."}
            href={"/find-answer"}
          />
          <FeatureCard
            heading={"2. Occupation VS Qualification"}
            icon={<Icon as={FcApproval} w={10} h={10} />}
            description={
              "To see the qualification domination on one occupation."
            }
            href={"/detailed-table"}
          />
          <FeatureCard
            heading={"3. Occupation VS State/Age"}
            icon={<Icon as={FcMindMap} w={10} h={10} />}
            description={
              "To see the distribution of occupations in different states and ages."
            }
            href={"/occupation-age-state"}
          />
          <FeatureCard
            heading={"4. Explore Occupation Skills"}
            icon={<Icon as={FcSupport} w={10} h={10} />}
            description={"To see the skills required for one occupation."}
            href={"/occupations"}
          />
          <FeatureCard
            heading={"5. Compare Different Courses"}
            icon={<Icon as={FcReading} w={10} h={10} />}
            description={"Between at most 3 courses to see the differences."}
            href={"/compare-courses"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
