import React, { useState, } from 'react';
import {
  Avatar,
  Progress,
  Box,
  ButtonGroup,
  Button,
  Center,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Image,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Stack,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { ObjectType } from 'typescript';
import OccupationItem from '@/components/find/occupationItem';
import { occupation } from '@prisma/client';



// const Form2 = () => {
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
//         User Details
//       </Heading>
//       <FormControl as={GridItem} colSpan={[6, 3]}>
//         <FormLabel
//           htmlFor="country"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}>
//           Country / Region
//         </FormLabel>
//         <Select
//           id="country"
//           name="country"
//           autoComplete="country"
//           placeholder="Select option"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md">
//           <option>United States</option>
//           <option>Canada</option>
//           <option>Mexico</option>
//         </Select>
//       </FormControl>

//       <FormControl as={GridItem} colSpan={6}>
//         <FormLabel
//           htmlFor="street_address"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           Street address
//         </FormLabel>
//         <Input
//           type="text"
//           name="street_address"
//           id="street_address"
//           autoComplete="street-address"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
//         <FormLabel
//           htmlFor="city"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           City
//         </FormLabel>
//         <Input
//           type="text"
//           name="city"
//           id="city"
//           autoComplete="city"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//         <FormLabel
//           htmlFor="state"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           State / Province
//         </FormLabel>
//         <Input
//           type="text"
//           name="state"
//           id="state"
//           autoComplete="state"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//         <FormLabel
//           htmlFor="postal_code"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           ZIP / Postal
//         </FormLabel>
//         <Input
//           type="text"
//           name="postal_code"
//           id="postal_code"
//           autoComplete="postal-code"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>
//     </>
//   );
// };

// const Form3 = () => {
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal">
//         Social Handles
//       </Heading>
//       <SimpleGrid columns={1} spacing={6}>
//         <FormControl as={GridItem} colSpan={[3, 2]}>
//           <FormLabel
//             fontSize="sm"
//             fontWeight="md"
//             color="gray.700"
//             _dark={{
//               color: 'gray.50',
//             }}>
//             Website
//           </FormLabel>
//           <InputGroup size="sm">
//             <InputLeftAddon
//               bg="gray.50"
//               _dark={{
//                 bg: 'gray.800',
//               }}
//               color="gray.500"
//               rounded="md">
//               http://
//             </InputLeftAddon>
//             <Input
//               type="tel"
//               placeholder="www.example.com"
//               focusBorderColor="brand.400"
//               rounded="md"
//             />
//           </InputGroup>
//         </FormControl>

//         <FormControl id="email" mt={1}>
//           <FormLabel
//             fontSize="sm"
//             fontWeight="md"
//             color="gray.700"
//             _dark={{
//               color: 'gray.50',
//             }}>
//             About
//           </FormLabel>
//           <Textarea
//             placeholder="you@example.com"
//             rows={3}
//             shadow="sm"
//             focusBorderColor="brand.400"
//             fontSize={{
//               sm: 'sm',
//             }}
//           />
//           <FormHelperText>
//             Brief description for your profile. URLs are hyperlinked.
//           </FormHelperText>
//         </FormControl>
//       </SimpleGrid>
//     </>
//   );
// };

const Form4 = (props : {onAnswer: (event: any) => void}) => {
  return (
    <>
      <Center>
        <VStack p={'6'}>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'1'} textAlign={'center'}>
          Question 4
        </Heading>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'6'} textAlign={'center'}>
          Where do you look yourself to be satisfied working?
        </Heading>
        <Stack direction={'row'}>
        <Button id="q4-a-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.a)}
          >A</Button>
        <Button id="q4-b-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.b)}
          >B</Button>
        <Button id="q4-c-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.b)}
        >B</Button>
        </Stack>
        </VStack>
      </Center>
      
    </>
  );
};

const Form3 = (props : {onAnswer: (event: any) => void}) => {
  return (
    <>
      <Center>
        <VStack p={'6'}>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'1'} textAlign={'center'}>
          Question 3
        </Heading>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'6'} textAlign={'center'}>
          Do you like creating, selling, or managing products or services?
        </Heading>
        <Stack direction={'row'}>
        <Button id="q3-a-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.a)}
          >A</Button>
        <Button id="q3-b-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.b)}
          >B</Button>
        </Stack>
        </VStack>
      </Center>
      
    </>
  );
};

const Form2 = (props : {onAnswer: (event: any) => void}) => {
  return (
    <>
      <Center>
        <VStack p={'6'}>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'1'} textAlign={'center'}>
          Question 2
        </Heading>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'6'} textAlign={'center'}>
          Is the job focused on caring for, teaching, or helping others?
        </Heading>
        <Stack direction={'row'}>
        <Button id="q2-a-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.a)}
          >A</Button>
        <Button id="q2-b-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.b)}
          >B</Button>
        </Stack>
        </VStack>
      </Center>
      
    </>
  );
};

const Form1 = (props : {onAnswer: (event: any) => void}) => {
  return (
    <>
      <Center>
        <VStack p={'6'}>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'1'} textAlign={'center'}>
          Question 1
        </Heading>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'6'} textAlign={'center'}>
          Is the job mostly inside or outside?
        </Heading>
        <Stack direction={'row'}>
        <Button id="q1-a-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.a)}
          >A</Button>
        <Button id="q1-b-my-quiz-option" onClick={props.onAnswer} // variant={setVariant(isAnswered.q1.b)}
          >B</Button>
        </Stack>
        </VStack>
      </Center>
      
    </>
  );
};

export default function FindAnswerPage() {

  const totalQuestionNum: number = 3
  const progressPercentage: number = 100 / totalQuestionNum;

  const toast = useToast();

  // for showing result or quiz, false is quiz, true is result
  const [resultShown, setResultShown] = useState(false);
  
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState((progressPercentage));
  const [yourAnswer, setYourAnswer] = useState('');


  const [isAnswered, setAnswered] = useState({
    'q1': 'null',
    'q2': 'null',
    'q3': 'null',
    'q4': 'null',
  });

  const setAnsweredHandler = (event: any) => {
    const inputArray = (event.target.id as string).split('-');
    const questionId = inputArray[0];
    const optionId = inputArray[1];

    const idObject = { [questionId]: optionId }
    

    setAnswered(isAnswered => ({
      ...isAnswered,
      ...idObject,
    }));

    // TODO: Not Correct... Need to change
    // setYourAnswer(yourAnswer => (yourAnswer + questionId + ': ' + optionId + ', '))

  };

  // const setVariant = (input: boolean) => {
  //   return input ? 'solid' : 'outline'
  // }

  // Below is for respond display
  const [occupationList, setOccupationList]: [any, any] = useState([]);


  async function requestQuizResult(quizAnswers : any) {
    const response = await fetch('/api/get-quiz-result', {
      method: 'POST',
      body: JSON.stringify(quizAnswers),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const occupationResult = await response.json();
  
    if (!response.ok) {
      throw new Error(occupationResult.message || 'Something went wrong!');
    } else {
      console.log(occupationResult);
      setOccupationList(occupationResult);

      setResultShown(true);
    }
  }

  

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        <Heading fontSize={'xs'}>Progress: {progress.toPrecision(5)}% </Heading>
        <Heading fontSize={'xs'}>Your Answer: {yourAnswer}</Heading>
        {
          step === 1 ? <Form1 onAnswer={setAnsweredHandler}/> : 
          step === 2 ? <Form2 onAnswer={setAnsweredHandler}/> : 
          <Form3 onAnswer={setAnsweredHandler}/>
        }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - progressPercentage);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === totalQuestionNum}
                onClick={() => {
                  setStep(step + 1);
                  if (step === totalQuestionNum) {
                    setProgress(100);
                  } else {
                    setProgress(progress + progressPercentage);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === totalQuestionNum ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Quiz Finished',
                    description: "We are searching a result for you.",
                    status: 'loading',
                    duration: 2400,
                    isClosable: true,
                  });

                  requestQuizResult(isAnswered);


                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
        <Heading fontSize={'x-small'}>{'DEV: ' + JSON.stringify(isAnswered)}</Heading>
      </Box>
    
    {true ? (<>
      <Heading></Heading>
      {occupationList.map((occupation: { anzsco: any; job_name: any; job_outlook_url: any; course_occupation: any; }) => (
        <OccupationItem  
          key={occupation.anzsco} 
          job_name={occupation.job_name}
          job_outlook_url={occupation.job_outlook_url}
          course_occupation={occupation.course_occupation}></OccupationItem>
      ))}
      
      </>
    ) : null}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
}