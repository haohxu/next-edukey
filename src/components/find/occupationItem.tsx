import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Center, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { course } from "@prisma/client";


const CourseItem = (props: any) => {
  return (
    <>
      <Flex>
        <Box flex={'1'} textAlign={'left'}>
          <Text>{props.course.course_title}</Text>
        </Box>
        <Spacer />
        <Box>
          <NextLink href={'/courses/'+props.course.course_code}>
            See More
          </NextLink>
        </Box>
      </Flex>
    </>
  );
}


export default function OccupationItem(props: any) {
  return (
  <Center py={3}>
    <Box
      maxW={'1600px'}
      w={'full'}
      // bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      <Stack>
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}>
          Occupation
        </Text>
        {/* <Heading
          fontSize={'2xl'}
          fontFamily={'body'}>
          {props.job_name}
        </Heading> */}
        {/* <Text color={'gray.500'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum.
        </Text> */}
        
      </Stack>
      <Accordion allowToggle >
        <AccordionItem border={'none'}>
          
            <AccordionButton 
              paddingLeft={'initial'} paddingTop={'2'}>
              <Box  flex='1' textAlign='left'>
              <Heading
                // color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                {props.job_name}
              </Heading>
              </Box>
              <Text fontSize={'sm'}>See Available Courses: &nbsp; &nbsp;</Text>
              <AccordionIcon />
            </AccordionButton>
              
          <AccordionPanel pb={4}>
            {props.course_occupation.map( (item: {course: course}) =>  
                (<CourseItem 
                  key={props.job_name + item.course.course_code}
                  course={item.course}
                  ></CourseItem>)
              )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text as={'a'} href={props.job_outlook_url} fontWeight={600} >
            Government Website: {props.job_outlook_url}</Text>
          
        </Stack>
      </Stack>
    </Box>
  </Center>)
}