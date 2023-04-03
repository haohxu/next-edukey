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
  Tag,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Container,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { ObjectType } from 'typescript';
import OccupationItem from '@/components/find/occupationItem';
import { occupation } from '@prisma/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

const setVariant = (input: boolean) => {
  return input ? 'solid' : 'outline'
}

const Form4 = (props : {onAnswer: (event: any) => void, varient: string}) => {
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
        <Stack direction={'row'} spacing={'8'}>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'Factory'} src={'/static/4a.jpg'}/>
            <Button id="q4-a-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'a')}
            >A</Button>
          </Stack>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'Office'} src={'/static/4b.jpg'}/>
            <Button id="q4-b-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'b')}
            >B</Button>
          </Stack>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'Laboratory'} src={'/static/4c.jpg'}/>
            <Button id="q4-c-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'c')}
            >C</Button>
          </Stack>
        </Stack>
        </VStack>
      </Center>
      
    </>
  );
};

const Form3 = (props : {onAnswer: (event: any) => void, varient: string}) => {
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
        <Stack direction={'row'} spacing={'8'}>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'Yes'} src={'/static/yes.png'}/>
            <Button id="q3-a-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'a')}
              >A</Button>
          </Stack>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'No'} src={'/static/No.png'}/>
            <Button id="q3-b-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'b')}
              >B</Button>
          </Stack>
        </Stack>
        </VStack>
      </Center>
      
    </>
  );
};

const Form2 = (props : {onAnswer: (event: any) => void, varient: string}) => {
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
        <Stack direction={'row'} spacing={'8'}>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'to help people'} src={'/static/2a.jpeg'}/>
            <Button id="q2-a-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'a')}
              >A</Button>
          </Stack>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'to work solo'} src={'/static/2b.jpg'}/>
            <Button id="q2-b-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'b')}
              >B</Button>
          </Stack>
        
        
        
        </Stack>
        </VStack>
      </Center>
      
    </>
  );
};

const Form1 = (props : {onAnswer: (event: any) => void, varient: string}) => {
  return (
    <>
      <Center>
        <VStack p={6}>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'1'} textAlign={'center'}>
          Question 1
        </Heading>
        <Heading w="100%" fontWeight="normal" mb="2%" p={'6'} textAlign={'center'}>
          Is the job mostly inside or outside?
        </Heading>
        <Stack direction={'row'} spacing={'8'}>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'Indoor'} src={'/static/1a.jpeg'}/>
            <Button id="q1-a-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'a')}
              >A</Button>
          </Stack>
          <Stack direction={'column'} p={0}>
            <Image boxSize={'200px'} objectFit={'contain'} alt={'Outdoor'} src={'/static/1b.jpeg'}/>
            <Button id="q1-b-my-quiz-option" onClick={props.onAnswer} variant={setVariant(props.varient === 'b')}
            >B</Button>
          </Stack>
          
          
        </Stack>
        </VStack>
      </Center>
      
    </>
  );
};

export default function FindAnswerPage() {
  const route = useRouter();

  const totalQuestionNum: number = 4
  const progressPercentage: number = 100 / totalQuestionNum;

  const toast = useToast();

  // for showing result or quiz, false is quiz, true is result
  const [resultShown, setResultShown] = useState(false);
  
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState((progressPercentage));


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
  };

  // display user's chosen button
  const setVariant = (input: boolean) => {
    return input ? 'solid' : 'outline'
  }

  // display user's current answer
  const setYourAnswer = () => {
    return (
      (isAnswered.q1 === 'null' ? '' : ('Q1: ' + isAnswered.q1.toUpperCase()) +' -> ') + 
      (isAnswered.q2 === 'null' ? '' : ('Q2: ' + isAnswered.q2.toUpperCase()) +' -> ') +
      (isAnswered.q3 === 'null' ? '' : ('Q3: ' + isAnswered.q3.toUpperCase()) +' -> ') +
      (isAnswered.q4 === 'null' ? '' : ('Q4: ' + isAnswered.q4.toUpperCase()))
  )};

  // get current question
  const currentQuestion = () => {
    // console.log('q' + step.toString());
    return 'q' + step.toString();
  };

  // control Next button
  const nextButtonHandler = () => {
    setStep(step + 1);
    if (step === totalQuestionNum) {
      setProgress(100);
    } else {
      setProgress(progress + progressPercentage);
    }
  }

  // control Back button
  const backButtonHandler = () => {
    setStep(step - 1);
    setProgress(progress - progressPercentage);
  }


  

  // Below is for respond display
  const [divisionList, setDivisionList]: [any, any] = useState([]);
  


  async function requestQuizResult(quizAnswers : any) {
    const response = await fetch('/api/get-quiz-result-v2', {
      method: 'POST',
      body: JSON.stringify(quizAnswers),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const responseResult = await response.json();
    
  
    if (!response.ok) {
      toast({
        title: 'Warning!',
        description: "We cannot search anything for you",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      throw new Error(responseResult.message || 'Something went wrong!');
    } else {
      console.log(responseResult);
      
      setDivisionList(responseResult);

      setResultShown(true);

      toast({
        title: 'Done!',
        description: "The result is here!",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      // TODO: use another page to display result
      // route.push('/');
    }
  }

  

  return (
    <>
    <Head>
      <title>Find Alternative Education for You</title>
    </Head>
    {!resultShown ? (
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
        <Heading fontSize={'xs'}>Your Answer: {setYourAnswer()}</Heading>
        {
          step === 1 ? <Form1 onAnswer={setAnsweredHandler} varient={isAnswered.q1}/> : 
          step === 2 ? <Form2 onAnswer={setAnsweredHandler} varient={isAnswered.q2}/> : 
          step === 3 ? <Form3 onAnswer={setAnsweredHandler} varient={isAnswered.q3}/> :
          <Form4 onAnswer={setAnsweredHandler} varient={isAnswered.q4}/>
        }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={backButtonHandler}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === totalQuestionNum || isAnswered[currentQuestion() as keyof typeof isAnswered] === 'null'}
                onClick={nextButtonHandler}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === totalQuestionNum ? (
              <Button
                w="7rem"
                colorScheme="blue"
                variant="solid"
                isDisabled={isAnswered.q1 === 'null' || isAnswered.q2 === 'null' || isAnswered.q3 === 'null' || isAnswered.q4 === 'null'}
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
                Show Result
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
        {/* <Heading fontSize={'x-small'}>{'DEV: ' + JSON.stringify(isAnswered)}</Heading> */}
      </Box>
    ) : null}
    
    {resultShown ? (<>
      <Center>
      <Heading marginY={'8'}>Division</Heading>
      </Center>
      <Container maxWidth={'1200px'}>
        
          <Tabs isFitted variant='soft-rounded' colorScheme={'blue'} >
            <TabList mb='1em'>
            {divisionList.map( (item: any) => (
            <Tab key={'division-'+ item.anzsic_division}>{item.anzsic_division}</Tab>
            ) )}
            </TabList>
            <TabPanels>
            {divisionList.map( (item: any) => (
            <TabPanel key={'division-tabpanel'+ item.anzsic_division}>
              {item.division_course.map((occupation: { anzsco: any; job_name: any; job_outlook_url: any; course_occupation: any; }) => (
                <OccupationItem  
                  key={'occupation' + item.anzsic_division + occupation.anzsco} 
                  job_name={occupation.job_name}
                  job_outlook_url={occupation.job_outlook_url}
                  course_occupation={occupation.course_occupation}></OccupationItem>
              ))}
            </TabPanel>
            ) )}
            </TabPanels>
          </Tabs>
        
      </Container>
      </>
    ) : null}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
}