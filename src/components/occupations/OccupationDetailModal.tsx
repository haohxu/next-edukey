import { newOccupation } from "@/lib/read_database";
import { MinusIcon } from "@chakra-ui/icons";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  ModalFooter,
  Button,
  Tag,
  TagLabel,
  Stack,
  CircularProgress,
  CircularProgressLabel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle, MdPanTool, MdSettings } from "react-icons/md";

export default function OccupationDetailModal({
  theOccupation,
  isOpen,
  onClose,
}: {
  theOccupation: newOccupation;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      size={"lg"}
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      // isCentered
      motionPreset={"slideInBottom"}
    >
      <ModalOverlay
        backdropFilter={"auto"}
        backdropBlur={"5px"}
        // backdropBrightness={"80%"}
        backdropInvert={"10%"}
      />
      <ModalContent>
        <ModalHeader>{theOccupation.job_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight={"bold"} mb="1rem">
            {"ANZSCO Code: "}{" "}
            <Text as={"span"} fontWeight={"normal"}>
              {theOccupation.anzsco_code}
            </Text>
          </Text>
          <Text fontWeight={"bold"}>{"Occupation Description: "}</Text>
          <Text fontWeight={"normal"} mb="1rem">
            <MinusIcon /> {theOccupation.occupation_description}
          </Text>

          <Flex direction={"column"} paddingBottom={"1rem"}>
            <Text fontWeight={"bold"}>{"Required Skills: "}</Text>
            {theOccupation.occupation_competencies
              .slice(0, 4)
              .map((competency) => (
                <Tag
                  key={"occupation-skill-modal-tag-" + "-" + competency.id}
                  width={"fit-content"}
                  colorScheme="purple"
                  variant={"solid"}
                  size={"lg"}
                  marginY={1}
                >
                  <TagLabel>{competency.core_competency}</TagLabel>
                </Tag>
              ))}
          </Flex>

          <Flex direction={"column"} paddingBottom={"1rem"}>
            <Text fontWeight={"bold"}>{"Daily Tasks: "}</Text>
            {theOccupation.occupation_tasks.slice(0, 3).map((task) => (
              <Stack
                direction={"row"}
                key={"occupation-task-modal-tag-" + "-" + task.id}
              >
                <CircularProgress
                  value={Math.round(task.time_spent_percentage * 100)}
                  size={"60px"}
                  color="purple.500"
                >
                  <CircularProgressLabel>
                    {Math.round(task.time_spent_percentage * 100) + "%"}
                  </CircularProgressLabel>
                </CircularProgress>
                <Text>{task.specialist_task}</Text>
              </Stack>

              // <Tag
              //   key={"occupation-task-modal-tag-" + "-" + task.id}
              //   width={"fit-content"}
              //   size={"lg"}
              //   marginY={1}
              // >
              //   <TagLabel color={"purple.500"} fontWeight={"bold"}>
              //     {task.specialist_task}
              //   </TagLabel>
              // </Tag>
            ))}
          </Flex>

          {theOccupation.occupation_techtools.length > 0 && (
            <Flex direction={"column"}>
              <Text fontWeight={"bold"}>{"Necessary Tech Tools: "}</Text>
              <List>
                {theOccupation.occupation_techtools
                  .slice(0, 5)
                  .map((techtool) => (
                    <ListItem
                      key={"occupation-techtool-modal-tag-" + "-" + techtool.id}
                    >
                      <ListIcon as={MdSettings} color={"purple.500"} />
                      {techtool.emerging_trending && (
                        <Text as={"span"} fontWeight={"bold"}>
                          {"(" + techtool.emerging_trending + ") "}
                        </Text>
                      )}
                      {techtool.technology_tool}
                    </ListItem>
                  ))}
              </List>
            </Flex>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="purple" mr={1} onClick={onClose}>
            Close
          </Button>
          {/* <Button variant="ghost">Secondary Action</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
