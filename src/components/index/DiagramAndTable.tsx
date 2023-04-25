import {
  Container,
  Heading,
  Flex,
  Stack,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { eduation_employment_data } from "@prisma/client";
import { Fragment, useState } from "react";
import DataTableComponent from "./DataTableComponent";
import WordCloud from "./WordCloud";

export default function DiagramAndTable({
  tableData,
}: {
  tableData: eduation_employment_data[];
}) {
  const [isTable, setIsTable] = useState(false);

  return (
    <Fragment>
      <Container maxWidth={"6xl"}>
        <Stack direction={"column"}>
          <Heading alignSelf={"center"}>Diagram and Table</Heading>
          <Flex direction={"row"}>
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
          )}
        </Stack>
      </Container>
    </Fragment>
  );
}
