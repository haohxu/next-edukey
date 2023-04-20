import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { course } from "@prisma/client";

const CourseItem = (props: any) => {
  return (
    <>
      <Flex>
        <Box textAlign={"left"}>
          <Text fontSize={{ base: "sm", md: "md" }}>
            {"- "}
            <Link as={NextLink} href={"/courses/" + props.course.course_code}>
              {props.course.course_title}
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default function OccupationItem(props: any) {
  return (
    <Center py={1}>
      <Box
        maxW={"1200px"}
        w={"full"}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={"lg"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"blue.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
            align="start"
          >
            Occupation
          </Text>
          {/* <Heading
          fontSize={'2xl'}
          fontFamily={'body'}>
          {props.job_name}
        </Heading> */}
          {/* <Text color={'gray.500'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum.
        </Text> */}
        </Stack>
        <Accordion allowToggle>
          <AccordionItem border={"none"}>
            <AccordionButton paddingLeft={"initial"} paddingTop={"2"}>
              <Box flex="1" textAlign="left">
                <Heading
                  // color={useColorModeValue('gray.700', 'white')}
                  fontSize={{ base: "md", md: "2xl" }}
                  fontFamily={"body"}
                >
                  {props.job_name}
                </Heading>
              </Box>
              <Text fontSize={{ base: "xs", md: "sm" }}>
                See Available Courses: &nbsp;
              </Text>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              {props.course_occupation.map((item: { course: course }) => (
                <CourseItem
                  key={props.job_name + item.course.course_code}
                  course={item.course}
                ></CourseItem>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          {/* <Text fontWeight={600}>
            Government Website: &nbsp;
            <Text as={"a"} href={props.job_outlook_url} fontWeight={500}>
              {props.job_outlook_url}
            </Text>
          </Text> */}
        </Stack>
      </Box>
    </Center>
  );
}
