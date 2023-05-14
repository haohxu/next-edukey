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
const TableauReactMap = dynamic(() => import("./TableauMap"), { ssr: false });

export default function DiagramAndTableLink() {
  const [isTable, setIsTable] = useState(false);

  return (
    <Fragment>
      <Container maxWidth={"6xl"} minHeight={"2xl"}>
        <Stack direction={"column"}>
          <Heading alignSelf={"center"} id={"homepage-stats-2-1412"}>Occupation VS Qualification</Heading>
          <Heading fontSize={"md"}></Heading>
          <Flex
            minHeight={"30vh"}
            // maxHeight={"2xl"}
            maxWidth={"6xl"}
            direction={"column"}
          >
            <Spacer />            
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
          {/* <TableauReactMap /> */}
        </Stack>
      </Container>
    </Fragment>
  );
}
