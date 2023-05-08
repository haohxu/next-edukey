import {
  Container,
  Heading,
  Flex,
  Stack,
  ButtonGroup,
  Button,
  Center,
  Badge,
  Tag,
  Spacer,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { MdBarChart } from "react-icons/md";
import ChakraNextLink from "../chakra-next-link";
// import TableauReact from "./Tableau";
import dynamic from "next/dynamic";

const TableauReact = dynamic(() => import("./Tableau"), { ssr: false });

export default function DiagramAndTableLink() {
  const [isTable, setIsTable] = useState(false);

  return (
    <Fragment>
      <Container maxWidth={"6xl"} minHeight={"2xl"}>
        <Stack direction={"column"}>
          <Heading alignSelf={"center"} id={"homepage-stats-2-1412"}>Occupation VS Qualification</Heading>
          <Heading fontSize={"md"}></Heading>
          {/* <Flex direction={"row"}>
            <ButtonGroup spacing={0} id={"homepage-stats-2-1412"}>
              <Button
                borderRightRadius={"none"}
                variant={!isTable ? "solid" : "outline"}
                colorScheme={"blue"}
                onClick={() => {
                  setIsTable(false);
                }}
              >
                Diagram
              </Button>
              <Button
                borderLeftRadius={"none"}
                variant={!isTable ? "outline" : "solid"}
                colorScheme={"blue"}
                onClick={() => {
                  setIsTable(true);
                }}
              >
                Table
              </Button>
            </ButtonGroup>
          </Flex>
          {isTable ? (
            <DataTableComponent allTableData={tableData} />
          ) : (
            <WordCloud />
          )} */}
          <Flex
            minHeight={"30vh"}
            // maxHeight={"2xl"}
            maxWidth={"6xl"}
            direction={"column"}
          >
            <Spacer />
            {/* <Center>
              <Tag size={"lg"}>
                {" "}
                <MdBarChart /> &nbsp;{" "}
                {"(Under Testing) This will be a Stacked Bar Chart"}{" "}
              </Tag>
            </Center> */}
            
            <TableauReact />
            <Spacer />
          </Flex>
          <Center>
            <ChakraNextLink
              href={"/detailed-table"}
              color={"blue.500"}
              fontWeight={"semibold"}
              fontSize={"md"}
            >
              Show Detailed Table
            </ChakraNextLink>
          </Center>
        </Stack>
      </Container>
    </Fragment>
  );
}
