import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { ObjectType } from "typescript";


export default function QuizPage () {

  const [isAnswered, setAnswered] = useState({
    'q1': {'a': false, 'b': false, 'c': false},
    'q2': {'a': false, 'b': false, 'c': false},
    'q3': {'a': false, 'b': false, 'c': false},
    'q4': {'a': false, 'b': false, 'c': false},
  });

  const setAnsweredHandler = (event: any) => {
    const inputArray = (event.target.id as string).split('-');
    const questionId = inputArray[0];
    const optionId = inputArray[1];

    const idObject = { [questionId]: {'a': false, 'b': false, 'c': false, [optionId]: true} }
    

    setAnswered(isAnswered => ({
      ...isAnswered,
      ...idObject,
    }));

    console.log(isAnswered);
  };

  const setVariant = (input: boolean) => {
    return input ? 'solid' : 'outline'
  }
  
  return (
    <>
      <Box textAlign={'center'}>
        <FormControl textAlign={'inherit'}>
          <FormLabel textAlign={'inherit'}></FormLabel>
          <Heading>Question 1</Heading>
          <Heading>What is your...</Heading>
          <Button id="q1-a-my-quiz-option" onClick={setAnsweredHandler}
            variant={setVariant(isAnswered.q1.a)}>A</Button>
          <Button id="q1-b-my-quiz-option" onClick={setAnsweredHandler}
            variant={setVariant(isAnswered.q1.b)}>B</Button>
          <FormHelperText></FormHelperText>
        </FormControl>

        
        
      </Box>
    </>
  );
}