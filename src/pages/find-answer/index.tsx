import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Center,
  Heading,
  Flex,
  Image,
  Stack,
  VStack,
  Spacer,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuizResultStore } from "@/context/QuizResultStore";
import ChakraNextLink from "@/components/chakra-next-link";

const setVariant = (input: boolean) => {
  return input ? "solid" : "outline";
};

const Form4 = (props: { onAnswer: (event: any) => void; varient: string }) => {
  return (
    <>
      <Center>
        <VStack p={0}>
          <Heading
            w="100%"
            fontWeight="normal"
            mb="2%"
            p={0}
            textAlign={"center"}
          >
            Where would you rather be?
          </Heading>
          <Stack direction={"row"} spacing={"8"}>
            <Stack direction={"column"} p={0}>
              <Button
                id="q4-a-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "a")}
              >
                A: Manufacturing
              </Button>
              <Image
                boxSize={"300px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"Factory"}
                src={"/static/4-a.png"}
              />
            </Stack>
            <Stack direction={"column"} p={0}>
              <Button
                id="q4-b-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "b")}
              >
                B: Business
              </Button>
              <Image
                boxSize={"300px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"Office"}
                src={"/static/4-b.png"}
              />
            </Stack>
            <Stack direction={"column"} p={0}>
              <Button
                id="q4-c-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "c")}
              >
                C: Scientific Research
              </Button>
              <Image
                boxSize={"300px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"Laboratory"}
                src={"/static/4-c.png"}
              />
            </Stack>
          </Stack>
        </VStack>
      </Center>
    </>
  );
};

const Form3 = (props: { onAnswer: (event: any) => void; varient: string }) => {
  return (
    <>
      <Center>
        <VStack p={0}>
          <Heading
            w="100%"
            fontWeight="normal"
            mb="2%"
            p={"6"}
            textAlign={"center"}
          >
            Do you like creating, selling, or managing products or services?
          </Heading>
          <Stack direction={"row"} spacing={"8"}>
            <Stack direction={"column"} p={0}>
              <Button
                id="q3-a-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "a")}
              >
                A: Like
              </Button>
              <Image
                boxSize={"100px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"Yes"}
                src={"/static/3a-1.png"}
              />
            </Stack>
            <Stack direction={"column"} p={0}>
              <Button
                id="q3-b-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "b")}
              >
                B: Unlike
              </Button>
              <Image
                boxSize={"100px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"No"}
                src={"/static/3b-1.png"}
              />
            </Stack>
          </Stack>
        </VStack>
      </Center>
    </>
  );
};

const Form2 = (props: { onAnswer: (event: any) => void; varient: string }) => {
  return (
    <>
      <Center>
        <VStack p={0}>
          {/* <Heading
            w="100%"
            fontWeight="normal"
            mb="2%"
            p={"1"}
            textAlign={"center"}
          >
            Question 2
          </Heading> */}
          <Heading
            w="100%"
            fontWeight="normal"
            mb="2%"
            p={"6"}
            textAlign={"center"}
          >
            Which one of the following would you rather be?
          </Heading>
          <Stack direction={"row"} spacing={"8"}>
            <Stack direction={"column"} p={0}>
              <Button
                id="q2-a-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "a")}
              >
                A: Caring & Helping Others
              </Button>
              <Image
                boxSize={"300px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"to help people"}
                src={"/static/2-a.png"}
              />
            </Stack>
            <Stack direction={"column"} p={0}>
              <Button
                id="q2-b-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "b")}
              >
                B: Independent Work
              </Button>
              <Image
                boxSize={"300px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"to work solo"}
                src={"/static/2-b.png"}
              />
            </Stack>
          </Stack>
        </VStack>
      </Center>
    </>
  );
};

const Form1 = (props: { onAnswer: (event: any) => void; varient: string }) => {
  return (
    <>
      <Center>
        <VStack p={0}>
          {/* <Heading
            w="100%"
            fontWeight="normal"
            mb="2%"
            p={"1"}
            textAlign={"center"}
          >
            Question 1
          </Heading> */}
          <Heading
            w="100%"
            fontWeight="normal"
            mb="2%"
            p={"6"}
            textAlign={"center"}
          >
            Where would you like to spend most of your time?
          </Heading>
          <Stack direction={"row"} spacing={"8"}>
            <Stack direction={"column"} p={0}>
              <Button
                id="q1-a-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "a")}
              >
                A: Indoor
              </Button>
              <Image
                id="q1-a-my-quiz-option-image"
                boxSize={"300px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"Indoor"}
                src={"/static/1-a.png"}
                onClick={props.onAnswer}
              />
            </Stack>
            <Stack direction={"column"} p={0}>
              <Button
                id="q1-b-my-quiz-option"
                onClick={props.onAnswer}
                variant={setVariant(props.varient === "b")}
              >
                B: Outdoor
              </Button>
              <Image
                id="q1-b-my-quiz-option-image"
                boxSize={"300px"}
                objectFit={"contain"}
                objectPosition={"top center"}
                alt={"Outdoor"}
                src={"/static/1-b.png"}
                onClick={props.onAnswer}
              />
            </Stack>
          </Stack>
        </VStack>
      </Center>
    </>
  );
};

export default function FindAnswerPage() {
  const totalQuestionNum: number = 4;
  const progressPercentage: number = 100 / totalQuestionNum;

  const toast = useToast();
  const route = useRouter();

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(progressPercentage);
  const [isAnswered, setAnswered]: [{ [key: string]: string }, any] = useState({
    q1: "null",
    q2: "null",
    q3: "null",
    q4: "null",
  });

  const answerMapping: { [key: string]: { [key: string]: string } } = {
    q1: { a: "Indoor", b: "Outdoor" },
    q2: { a: "Caring & Helping Others", b: "Independent Work" },
    q3: { a: "Like", b: "Unlike" },
    q4: { a: "Manufacturing", b: "Business", c: "Scientific Research" },
  };

  // for route and back to previous
  const { quizResultResponse, setQuizResultResponse } = useQuizResultStore();

  // display user's current answer
  const setYourAnswer = () => {
    return (
      (isAnswered.q1 === "null"
        ? ""
        : " -> Q1: " + answerMapping.q1[isAnswered.q1]) +
      (isAnswered.q2 === "null"
        ? ""
        : " -> Q2: " + answerMapping.q2[isAnswered.q2]) +
      (isAnswered.q3 === "null"
        ? ""
        : " -> Q3: " + answerMapping.q3[isAnswered.q3]) +
      (isAnswered.q4 === "null"
        ? ""
        : " -> Q4: " + answerMapping.q4[isAnswered.q4])
    );
  };

  // get current question
  const currentQuestion = () => {
    // console.log('q' + step.toString());
    return "q" + step.toString();
  };

  // control Next button
  const nextButtonHandler = () => {
    if (step !== totalQuestionNum) {
      setStep(step + 1);
    }
    if (step === totalQuestionNum) {
      setProgress(100);
    } else {
      setProgress(progress + progressPercentage);
    }
  };

  // control Back button
  const backButtonHandler = () => {
    setStep(step - 1);
    setProgress(progress - progressPercentage);
  };

  const setAnsweredHandler = (event: any) => {
    const inputArray = (event.target.id as string).split("-");
    const questionId = inputArray[0];
    const optionId = inputArray[1];

    const idObject = { [questionId]: optionId };

    setAnswered((isAnswered: { [key: string]: string }) => ({
      ...isAnswered,
      ...idObject,
    }));

    nextButtonHandler();
  };

  // request quiz result from api (from database) based on answers
  async function requestQuizResult(quizAnswers: any) {
    const response = await fetch("/api/get-quiz-result-v2", {
      method: "POST",
      body: JSON.stringify(quizAnswers),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseResult = await response.json();

    if (!response.ok) {
      if (toast.isActive("find-answer-loading")) {
        toast.close("find-answer-loading");
      }
      toast({
        title: "Warning! Please Try It Later!",
        description:
          "We cannot search anything for you now. Please try it later!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      throw new Error(responseResult.message || "Something went wrong!");
    } else {
      console.log(responseResult);

      setQuizResultResponse(responseResult);
      if (toast.isActive("find-answer-loading")) {
        toast.close("find-answer-loading");
      }
      toast({
        title: "Done!",
        description: "The result is here!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      // TODO: The following can limit page reload
      // router.push({query: {page: 1}}, undefined, { shallow: true });
      route.push("/find-answer/result");
    }
  }

  return (
    <>
      <Head>
        <title>Find Alternative Education for You</title>
      </Head>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        <Flex
          w="100%"
          justifyContent="space-between"
          direction={"row"}
          margin={0}
          display={quizResultResponse.length === 0 ? "none" : "flex"}
        >
          <Spacer/>
          <ChakraNextLink
            textAlign={"end"}
            href={"/find-answer/result"}
            fontSize={"sm"}
            fontWeight={"semibold"}
            color={"blue.500"}
          >
            Back To Previous Result
          </ChakraNextLink>
        </Flex>

        <Heading fontSize={"xs"}>
          {"Progress: " + step + " / " + totalQuestionNum}{" "}
        </Heading>
        <Heading fontSize={"xs"}>{"Your Answer" + setYourAnswer()}</Heading>
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={backButtonHandler}
                isDisabled={step === 1}
                colorScheme="blue"
                variant="outline"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              {/* <Button
                w="7rem"
                isDisabled={
                  step === totalQuestionNum ||
                  isAnswered[currentQuestion() as keyof typeof isAnswered] ===
                    "null"
                }
                onClick={nextButtonHandler}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button> */}
            </Flex>
            {step === totalQuestionNum ? (
              <Button
                w="7rem"
                colorScheme="blue"
                variant="solid"
                isDisabled={
                  isAnswered.q1 === "null" ||
                  isAnswered.q2 === "null" ||
                  isAnswered.q3 === "null" ||
                  isAnswered.q4 === "null"
                }
                onClick={() => {
                  toast({
                    id: "find-answer-loading",
                    title: "Interests Received!",
                    description: "We are searching a result for you...",
                    status: "loading",
                    duration: 10000,
                    isClosable: true,
                  });

                  requestQuizResult(isAnswered);
                }}
              >
                Show Result
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
        {step === 1 ? (
          <Form1 onAnswer={setAnsweredHandler} varient={isAnswered.q1} />
        ) : step === 2 ? (
          <Form2 onAnswer={setAnsweredHandler} varient={isAnswered.q2} />
        ) : step === 3 ? (
          <Form3 onAnswer={setAnsweredHandler} varient={isAnswered.q3} />
        ) : (
          <Form4 onAnswer={setAnsweredHandler} varient={isAnswered.q4} />
        )}
      </Box>
    </>
  );
}
