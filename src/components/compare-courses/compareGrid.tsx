import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { course } from "@prisma/client";
import { Fragment } from "react";

export default function CompareGrid(props: { selectedCourses: course[] }) {
  const selectedCourses = props.selectedCourses;

  return (
    <Container maxWidth={"6xl"} overflowX={"auto"}>
      <Grid
        templateRows="repeat(8, 1fr)"
        templateColumns={"repeat(" + selectedCourses.length + ", 1fr)"}
        marginY={6}
        columnGap={2}
      >
        {/* Title row */}
        {/* <GridItem></GridItem> */}
        {selectedCourses.map((item) => (
          <GridItem
            key={item.course_code + item.course_title}
            backgroundColor="blue.500"
            textColor={"white"}
            padding={4}
            boxShadow={"lg"}
          >
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}}>{item.course_title}</Heading>
          </GridItem>
        ))}

        {/* <GridItem>
              <Heading>Course Code</Heading>
            </GridItem> */}
        {selectedCourses.map((item) => (
          <GridItem
            key={item.course_code + "-course_code"}
            paddingX={4}
            paddingY={6}
            backgroundColor={"gray.100"}
            borderY={"1px lightGray"}
            borderStyle={"solid"}
            boxShadow={"lg"}
          >
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"bold"} paddingBottom={3}>
              Course Code
            </Heading>
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"normal"}>
              {item.course_code}
            </Heading>
          </GridItem>
        ))}

        {/* <GridItem>
              <Heading>Qualification</Heading>
            </GridItem> */}
        {selectedCourses.map((item) => (
          <GridItem
            key={item.course_code + item.qualification_level}
            paddingX={4}
            paddingY={6}
            backgroundColor={"gray.100"}
            borderY={"2px lightGray"}
            borderStyle={"solid"}
            boxShadow={"lg"}
          >
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"bold"} paddingBottom={3}>
              Qualification
            </Heading>
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"normal"}>
              {item.qualification_level}
            </Heading>
          </GridItem>
        ))}

        {/* <GridItem>
              <Heading>Pre-requisite</Heading>
            </GridItem> */}
        {selectedCourses.map((item) => (
          <GridItem
            key={item.course_code + "-prerequisite"}
            paddingX={4}
            paddingY={6}
            backgroundColor={"gray.100"}
            borderY={"2px lightGray"}
            borderStyle={"solid"}
            boxShadow={"lg"}
          >
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"bold"} paddingBottom={3}>
              Pre-requisite
            </Heading>
            <Heading fontSize={"lg"} fontWeight={"normal"}>
              {item.entry_requirement}
            </Heading>
          </GridItem>
        ))}

        {/* <GridItem>
              <Heading>Course Type</Heading>
            </GridItem> */}
        {selectedCourses.map((item) => (
          <GridItem
            key={item.course_code + item.course_type}
            paddingX={4}
            paddingY={6}
            backgroundColor={"gray.100"}
            borderY={"2px lightGray"}
            borderStyle={"solid"}
            boxShadow={"lg"}
          >
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"bold"} paddingBottom={3}>
              Course Type
            </Heading>
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"normal"}>
              {item.course_type}
            </Heading>
          </GridItem>
        ))}

        {/* <GridItem>
              <Heading>Apprenticeship</Heading>
            </GridItem> */}
        {selectedCourses.map((item) => (
          <GridItem
            key={item.course_code + item.apprenticeship}
            paddingX={4}
            paddingY={6}
            backgroundColor={"gray.100"}
            borderY={"2px lightGray"}
            borderStyle={"solid"}
            boxShadow={"lg"}
          >
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"bold"} paddingBottom={3}>
              Apprenticeship
            </Heading>
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"normal"}>
              {item.apprenticeship === 1 ? "Yes" : "No"}
            </Heading>
          </GridItem>
        ))}

        {/* <GridItem>
              <Heading>Government Subsidized</Heading>
            </GridItem> */}
        {selectedCourses.map((item) => (
          <GridItem
            key={item.course_code + item.government_subsidised}
            paddingX={4}
            paddingY={6}
            backgroundColor={"gray.100"}
            borderY={"2px lightGray"}
            borderStyle={"solid"}
            boxShadow={"lg"}
          >
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"bold"} paddingBottom={3}>
              Government Subsidized
            </Heading>
            <Heading fontSize={{base: "md", sm: "lg" , md: "2xl"}} fontWeight={"normal"}>
              {item.government_subsidised === 1 ? "Yes" : "No"}
            </Heading>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
