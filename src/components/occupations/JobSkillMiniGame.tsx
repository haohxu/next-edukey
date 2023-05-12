import { newOccupation } from "@/lib/read_database";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  CloseButton,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Spacer,
  Tag,
  TagCloseButton,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { occupation_competency } from "@prisma/client";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import OccupationCard from "./OccupationCard";
import OccupationDetailModal from "./OccupationDetailModal";

export default function JobSkillMiniGame({
  userChosenOccupation,
  occupationList,
}: {
  userChosenOccupation: newOccupation;
  occupationList: newOccupation[];
}) {
  // for selected skills
  const [selectedSkills, setSelectedSkills] = useState<occupation_competency[]>(
    []
  );

  const isInSelectedSkills = (inputId: number) => {
    return selectedSkills.find((item) => item.id == inputId) === undefined
      ? false
      : true;
  };

  const setSelectedSkillsHandler = (event: any) => {
    const currentOccupationCompetencyId = event.target.value;
    setSelectedSkills((prevState) => {
      const newOccupationCompetency =
        userChosenOccupation.occupation_competencies.find(
          (item) => item.id == currentOccupationCompetencyId
        );
      if (newOccupationCompetency === undefined) {
        return prevState;
      } else if (isInSelectedSkills(currentOccupationCompetencyId)) {
        return prevState.filter(
          (item) => item.id != currentOccupationCompetencyId
        );
      } else if (prevState.length >= 4) {
        return prevState;
      } else {
        return [...prevState, newOccupationCompetency];
      }
    });
  };

  // for find similar occupations
  const findSimilarOccupations = (
    selectedSkillList: occupation_competency[]
  ) => {
    const similarOccupationList: newOccupation[] = [];
    if (selectedSkillList.length === 0) {
      console.log("no skill selected");
      return similarOccupationList;
    } else {
      occupationList.forEach((occupation) => {
        let count = 0;
        occupation.occupation_competencies
          .slice(0, selectedSkillList.length)
          .forEach((occupationCompetency, index) => {
            selectedSkillList.forEach((skill) => {
              if (
                occupationCompetency.core_competency === skill.core_competency
              ) {
                count += 1;
                return;
              }
            });
          });
        if (count >= selectedSkillList.length) {
          similarOccupationList.push(occupation);
        }
      });
      console.log(similarOccupationList);
      return similarOccupationList;
    }
  };

  const [similarOccupations, setSimilarOccupations] = useState<newOccupation[]>(
    []
  );

  const setSimilarOccupationsHandler = () => {
    setSimilarOccupations(() => findSimilarOccupations(selectedSkills));
    setIsShowSimilarOccupations(() => true);
  };

  // for show answer
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);

  // for show similar occupations
  const [isShowSimilarOccupations, setIsShowSimilarOccupations] =
    useState<boolean>(false);

  // for show occupation modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction={"column"}>
      {/* Title Part */}
      {/* <Heading paddingY={"10px"}>Current Occupation:</Heading> */}
      <Heading paddingY={"10px"} fontSize={"2xl"}>
        {userChosenOccupation.job_name}{" "}
        {"(ANZSCO: " + userChosenOccupation.anzsco_code + ")"}
      </Heading>

      {/* Show available occupation competencies and users choices */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacingX={"10px"}
        spacingY={"10px"}
      >
        {userChosenOccupation.occupation_competencies.map((o_c) => (
          <Button
            key={"occupation_competency-" + o_c.id}
            value={o_c.id}
            fontSize={"sm"}
            colorScheme="purple"
            variant={isInSelectedSkills(o_c.id) ? "solid" : "outline"}
            onClick={setSelectedSkillsHandler}
          >
            {o_c.core_competency}
          </Button>
        ))}
      </SimpleGrid>
      <Heading paddingY={"20px"}>Your Choices: </Heading>
      <SimpleGrid columns={4} spacingX={"10px"} spacingY={"10px"}>
        {selectedSkills.map((o_c, index) => (
          <ButtonGroup
            key={"occupation_competency-chosen-" + o_c.id}
            colorScheme="purple"
            onClick={setSelectedSkillsHandler}
            isAttached
          >
            <Button
              value={o_c.id}
              variant={"solid"}
              width={"full"}
              fontSize={"xs"}
              // onClick={setSelectedSkillsHandler}
            >
              {index + 1}
              {": "}
              {o_c.core_competency}
            </Button>
            <IconButton
              aria-label={
                "occupation_competency-chosen-" + o_c.id + "-close-icon"
              }
              icon={<CloseIcon />}
              value={o_c.id}
            />
          </ButtonGroup>
        ))}
        {selectedSkills.length < 4 &&
          Array.from({ length: 4 - selectedSkills.length }).map(
            (item, index) => (
              <Button
                key={
                  "occupation_competency-chosen-empty-" +
                  index +
                  selectedSkills.length
                }
                variant={"outline"}
                width={"full"}
                colorScheme="purple"
                fontSize={"sm"}

                // onClick={setSelectedSkillsHandler}
              >
                {index + selectedSkills.length + 1}
                {": "}
                {"________"}
              </Button>
            )
          )}
      </SimpleGrid>

      {/* Show correct answers */}
      {isShowAnswer && (
        <Fragment>
          <Heading paddingY={"10px"} fontSize={"md"}>
            Correct Answer:
          </Heading>
          <SimpleGrid columns={4} spacingX={"10px"} spacingY={"10px"}>
            {userChosenOccupation.occupation_competencies
              .slice(0, 4)
              .map((o_c, index) => (
                <ButtonGroup
                  key={"occupation_competency-correct-" + o_c.id}
                  variant={"solid"}
                  colorScheme={
                    o_c.id === selectedSkills[index]?.id ? "green" : "red"
                  }
                  isAttached
                >
                  <Button
                    // key={"occupation_competency-correct-" + o_c.id}
                    // value={o_c.id}
                    width={"full"}
                    fontSize={"xs"}
                    // onClick={setSelectedSkillsHandler}
                  >
                    {index + 1}
                    {": "}
                    {o_c.core_competency}
                  </Button>
                  <IconButton
                    aria-label={
                      "occupation_competency-correct-" + o_c.id + "-right-icon"
                    }
                    icon={
                      o_c.id === selectedSkills[index]?.id ? (
                        <CheckIcon />
                      ) : (
                        <CloseIcon />
                      )
                    }
                  />
                </ButtonGroup>
              ))}
          </SimpleGrid>
        </Fragment>
      )}

      <Flex direction={"row"} justifyContent={"flex-end"} paddingY={"40px"}>
        <ButtonGroup spacing={0}>
          <Button
            colorScheme="purple"
            variant="outline"
            fontSize={"sm"}
            onClick={() => setIsShowAnswer(true)}
          >
            Check Answer
          </Button>
          <Button
            colorScheme="purple"
            variant="ghost"
            fontSize={"sm"}
            onClick={() => {
              setIsShowSimilarOccupations(() => false);
              setIsShowAnswer(() => false);
              setSelectedSkills(() => []);
            }}
          >
            Clear
          </Button>
        </ButtonGroup>
      </Flex>
      {isShowAnswer && (
        <Flex direction={{ base: "column", md: "row" }}>
          <Heading>Are you satisfied with this result?</Heading>
          <Spacer />
          <ButtonGroup colorScheme="purple">
            <Button onClick={onOpen}>Yes</Button>
            <Button
              width={"fit-content"}
              onClick={setSimilarOccupationsHandler}
            >
              No, Show Similar Occupations
            </Button>
          </ButtonGroup>

          <OccupationDetailModal
            theOccupation={userChosenOccupation}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Flex>
      )}

      {/* Show similar occupations */}
      {isShowSimilarOccupations && (
        <Fragment>
          <Heading paddingY={"20px"}>Similar Occupations:</Heading>

          {similarOccupations.length === 0 && (
            <Heading paddingY={"10px"}>No similar occupations found.</Heading>
          )}
          <SimpleGrid
            paddingY={"10px"}
            columns={{ base: 1, sm: 2, md: 4 }}
            spacingX={"10px"}
            spacingY={"10px"}
          >
            {similarOccupations.slice(0, 8).map((similarOccupation) => (
              <OccupationCard
                key={"occupation-similar-" + similarOccupation.anzsco_code}
                theOccupation={similarOccupation}
                isSelected={false}
                selectButtonHandler={undefined}
              />
            ))}
          </SimpleGrid>
        </Fragment>
      )}
    </Flex>
  );
}
