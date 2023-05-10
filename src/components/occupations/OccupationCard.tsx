import { newOccupation } from "@/lib/read_database";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import courseItem from "../courses/courseItem";

export default function OccupationCard({
  theOccupation,
}: {
  theOccupation: newOccupation;
}) {
  return (
    <Box
      maxWidth={"1200px"}
      w={"full"}
      // bg={useColorModeValue('white', 'gray.900')}
      boxShadow={"lg"}
      rounded={"md"}
      // p={6}
      overflow={"hidden"}
      minH={"360px"}
    >
      <Text
        backgroundColor={"purple.500"}
        color={"white"}
        textTransform={"uppercase"}
        fontWeight={"bold"}
        fontSize={"sm"}
        letterSpacing={1.1}
        paddingX={6}
        paddingY={2}
      >
        {"Occupation"}
      </Text>
      <Stack padding={6}>
        <Heading
          width={"fit-content"}
          fontSize={{ base: "md", md: "lg" }}
          fontFamily={"body"}
        >
          {theOccupation.job_name}
        </Heading>

        <Text>
          {"Course Code: "}
          {theOccupation.anzsco_code}
        </Text>
        {/* <Text color={"gray.500"}>
          {theOccupation.occupation_description?.slice(0, 100) + "..."}
        </Text> */}
        <Text>{"Core Skills: "}</Text>
        {theOccupation.occupation_competencies.slice(0, 4).map((competency) => (
          <Tag
            key={
              "similar-occupation-skill-tag-" +
              theOccupation.anzsco_code +
              "-" +
              competency.id
            }
          >
            <TagLabel color={"purple.500"} fontWeight={"bold"}>
              {competency.core_competency}
            </TagLabel>
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}
