import { newOccupation } from "@/lib/read_database";
import {
  Container,
  Heading,
  Grid,
  SimpleGrid,
  Button,
  ButtonGroup,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import OccupationCard from "./OccupationCard";
import { SearchIcon } from "@chakra-ui/icons";

export default function OccupationCardGrid({
  currentOccupation,
  setCurrentOccupation,
  occupationList,
}: {
  currentOccupation: newOccupation | undefined;
  setCurrentOccupation: Dispatch<SetStateAction<newOccupation | undefined>>;
  occupationList: newOccupation[];
}) {
  // manage useState of filtered courses
  const [displayOccupations, setDisplayOccupations] = useState({
    maxNumPerPage: 8,
    leftIndex: 0,
    currentPageNum: 1,
  });
  const [filteredOccupations, setFilteredOccupations] =
    useState(occupationList);

  // with above, manage event of input (search) box
  const changeInputHandler = (event: { target: { value: string } }) => {
    // trim input, use lowercase to match
    const currentInputValue = event.target.value.trim().toLowerCase();
    console.log(currentInputValue);

    setFilteredOccupations((prevState) => {
      if (currentInputValue == "") {
        return occupationList;
      } else {
        try {
          const newState = occupationList.filter(
            (item) =>
              item.job_name.toLowerCase().match(currentInputValue) !== null
          );
          return newState;
        } catch (e) {
          console.error(e);
          return prevState;
        }
      }
      return prevState;
    });
  };

  // with above, manage event of previous, next page of courses
  const changePageNumHandler = (event: any) => {
    const currentButton = (event.target.id as string).toLowerCase();
    const maxPageNum = Math.ceil(
      filteredOccupations.length / displayOccupations.maxNumPerPage
    );
    if (
      currentButton === "button-go-l-page-1314" &&
      displayOccupations.currentPageNum > 1
    ) {
      setDisplayOccupations((prevState) => ({
        ...prevState,
        leftIndex: prevState.leftIndex - prevState.maxNumPerPage,
        currentPageNum: prevState.currentPageNum - 1,
      }));
    }
    if (
      currentButton === "button-go-r-page-1314" &&
      displayOccupations.currentPageNum < maxPageNum
    ) {
      setDisplayOccupations((prevState) => ({
        ...prevState,
        leftIndex: prevState.leftIndex + prevState.maxNumPerPage,
        currentPageNum: prevState.currentPageNum + 1,
      }));
    }
  };

  const selectButtonHandler = (event: any) => {
    const currentOccupationANZSCOCode = event.target.value;
    if (currentOccupation?.anzsco_code === currentOccupationANZSCOCode) {
      setCurrentOccupation(undefined);
    } else {
      setCurrentOccupation(
        occupationList.find(
          (item) => item.anzsco_code === currentOccupationANZSCOCode
        )
      );
    }
  };

  return (
    <Fragment>
      <Container maxWidth={"6xl"}>
        <Flex direction={"row"} paddingY={"20px"}>
          <ButtonGroup
            flexDirection={"row"}
            spacing={1}
            size={{ base: "xs", sm: "md" }}
            alignItems={"center"}
          >
            <Button id="button-go-l-page-1314" onClick={changePageNumHandler}>
              {"<"}
              {/* <ChevronLeftIcon /> */}
            </Button>
            <Button as={"p"}>
              {displayOccupations.currentPageNum +
                " / " +
                Math.ceil(
                  filteredOccupations.length / displayOccupations.maxNumPerPage
                )}
            </Button>
            <Button id="button-go-r-page-1314" onClick={changePageNumHandler}>
              {">"}
              {/* <ChevronRightIcon /> */}
            </Button>
          </ButtonGroup>

          <InputGroup maxWidth={"lg"} marginX={1}>
            <InputLeftElement
              pointerEvents={"none"}
              // color={"gray.300"}
              // fontSize={"1.2em"}
            >
              <SearchIcon color={"gray.300"} />
            </InputLeftElement>
            <Input
              placeholder="Search a Occupation name to play skill guessing game!"
              size={{ base: "md" }}
              variant="outline"
              onChange={changeInputHandler}
            />
          </InputGroup>
          <Spacer />
          {currentOccupation && (
            <Tag
              width={"fit-content"}
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={"bold"}
              marginX={1}
              borderRadius={"md"}
              variant={"solid"}
              colorScheme={"purple"}
            >
              <TagLabel>
                {currentOccupation?.job_name}{" "}
                {"(" + currentOccupation?.anzsco_code + ")"} &nbsp;
              </TagLabel>
              <TagCloseButton
                type={"button"}
                onClick={() => setCurrentOccupation(undefined)}
              />
            </Tag>
          )}
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacingX={"10px"}
          spacingY={"10px"}
        >
          {filteredOccupations
            .slice(
              displayOccupations.leftIndex,
              Math.min(
                filteredOccupations.length,
                displayOccupations.leftIndex + displayOccupations.maxNumPerPage
              )
            )
            .map((occupation, index) => (
              <OccupationCard
                key={occupation.anzsco_code + "-" + occupation.job_name}
                theOccupation={occupation}
                selectButtonHandler={selectButtonHandler}
                isSelected={
                  currentOccupation?.anzsco_code === occupation.anzsco_code
                }
              ></OccupationCard>
            ))}
        </SimpleGrid>
      </Container>
    </Fragment>
  );
}
