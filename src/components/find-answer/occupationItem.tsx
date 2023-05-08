import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { course, occupation_growth } from "@prisma/client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useCompareCoursesStore } from "@/context/CompareCoursesStore";
import { Fragment } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  InfoIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import { MdPeople } from "react-icons/md";

const SelectFavIconButton = ({ course }: { course: course }) => {
  // create custom Toast() to notify no more than 3 can be chosen
  const toast = useToast();
  const toastNotification = () => {
    if (!toast.isActive("no-more-than-3")) {
      toast({
        id: "no-more-than-3",
        position: "top-right",
        title: "You Cannot Select More Than 3 Courses",
        status: "info",
        variant: "left-accent",
        duration: 2500,
        isClosable: true,
      });
    }
  };

  const {
    compareCoursesResponse: selectedCourses,
    setCompareCoursesResponse: setSelectedCourses,
  } = useCompareCoursesStore();

  const isInSelectedCourses =
    selectedCourses.find((item) => item.course_code == course.course_code) ===
    undefined
      ? false
      : true;

  const setSelectedCoursesHandler = () => {
    setSelectedCourses((prevState: course[]) => {
      const checkSelectedCourses = prevState.find(
        (item) => item.course_code == course.course_code
      );
      if (checkSelectedCourses !== undefined) {
        const newState = prevState.filter(
          (item) => item.course_code != checkSelectedCourses.course_code
        );
        return newState;
      } else if (prevState.length >= 3) {
        toastNotification();
        return prevState;
      } else {
        const newState = [...prevState, course];
        return newState;
      }
    });
  };

  return (
    <IconButton
      bgColor={"transparent"}
      size={"xs"}
      color={"red.500"}
      variant="solid"
      icon={isInSelectedCourses ? <AiFillHeart /> : <AiOutlineHeart />}
      _hover={{
        colorScheme: "red.500",
        backgroundColor: "transparent",
      }}
      aria-label={"FavoriteIcon" + course.course_code}
      onClick={setSelectedCoursesHandler}
    />
  );
};

const CourseItem = (props: { course: course }) => {
  return (
    <>
      <Flex>
        <Box textAlign={"left"}>
          <Text fontSize={{ base: "sm", md: "md" }}>
            <SelectFavIconButton course={props.course} />
            {" - "}
            <Link as={NextLink} href={"/courses/" + props.course.course_code}>
              {props.course.course_title +
                " " +
                "(" +
                props.course.course_code +
                ")"}
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

const OccupationGrowth = (props: { occupation_growth: occupation_growth }) => {
  const occupation_growth = props.occupation_growth;
  const {
    growth_rate_2026,
    projected_employment_growth_nov_2026,
    future_growth_rate,
  } = occupation_growth;

  return (
    <Fragment>
      <Flex direction={{ base: "column", md: "row" }}>
        {growth_rate_2026 !== null && (
          <Tag
            size={{ base: "lg" }}
            width={"fit-content"}
            variant={"outline"}
            colorScheme={growth_rate_2026 >= 0 ? "green" : "red"}
            margin={"5px"}
          >
            <TagLabel fontWeight={"bold"}>{growth_rate_2026 + "%"}</TagLabel>
            <TagRightIcon
              as={growth_rate_2026 >= 0 ? ArrowUpIcon : ArrowDownIcon}
            />
          </Tag>
        )}
        {projected_employment_growth_nov_2026 !== null && (
          <Tag
            size={{ base: "lg" }}
            width={"fit-content"}
            variant={"solid"}
            colorScheme={
              projected_employment_growth_nov_2026 >= 0 ? "green" : "red"
            }
            margin={"5px"}
          >
            <TagLeftIcon as={MdPeople} />
            <TagLabel fontWeight={"bold"}>
              {(projected_employment_growth_nov_2026 > 0 ? "+" : "") +
                projected_employment_growth_nov_2026}
            </TagLabel>
          </Tag>
        )}

        {future_growth_rate !== null && (
          <Tag
            size={{ base: "lg" }}
            width={"fit-content"}
            variant={"solid"}
            colorScheme={"blue"}
            margin={"5px"}
          >
            <TagLabel fontWeight={"bold"}>{future_growth_rate}</TagLabel>
          </Tag>
        )}
        <Spacer />
        <Popover>
          <PopoverTrigger>
            <Button
              borderRadius={"lg"}
              variant={"outline"}
              colorScheme={"gray"}
              width={"fit-content"}
              size={"sm"}
            >
              i
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Data</PopoverHeader>
            <PopoverBody alignItems={"start"}>
              {
                "The statistics shows its corresponding 4-digit ANZSCO code occupation: "
              }
              <Text as={"span"} color={"blue.500"} fontWeight={"semibold"}>
                {occupation_growth.occupation +
                  " (" +
                  occupation_growth.anzsco_code +
                  "). "}
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Fragment>
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
        <Stack direction={"column"}>
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
          <Heading
            fontSize={{ base: "md", md: "2xl" }}
            fontFamily={"body"}
            alignSelf={"start"}
          >
            {props.job_name}
          </Heading>
          {/* <Text color={'gray.500'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum.
        </Text> */}
          <OccupationGrowth occupation_growth={props.occupation_growth} />
        </Stack>
        <Accordion allowToggle>
          <AccordionItem border={"none"}>
            <AccordionButton paddingLeft={"initial"} paddingTop={"2"}>
              <Box flex="1" textAlign="left">
                {/* <Heading
                  // color={useColorModeValue('gray.700', 'white')}
                  fontSize={{ base: "md", md: "2xl" }}
                  fontFamily={"body"}
                  color={"gray.100"}
                >
                  {props.job_name}
                </Heading> */}
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
