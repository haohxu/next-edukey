import { Box, Center, Stack, Accordion, AccordionItem, AccordionButton, Heading, AccordionIcon, AccordionPanel, Text, Button } from "@chakra-ui/react";
import { course } from "@prisma/client";
import NextLink from 'next/link';


export default function CourseItem (props: {courseItem: course}) {
  const courseItem = props.courseItem

  return (
  <Center py={1} >
    <Box
      maxWidth={'1200px'}
      w={'full'}
      // bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      <Stack>
        <Text
          color={'blue.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}>
          Course
        </Text>
        <Heading
          fontSize={'2xl'}
          fontFamily={'body'}>
          {courseItem.course_title}
        </Heading>
        <Text color={'gray.500'}>
          {courseItem.description}
        </Text>
        <NextLink href={'/courses/' + courseItem.course_code} passHref legacyBehavior >
          <Button as={'a'} variant={'link'} color={'blue.500'} width={'fit-content'}>See Detail</Button>
        </NextLink>
        
      </Stack>
      {/* <Accordion allowToggle >
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
              <Text fontSize={'sm'}>See Available Courses: &nbsp;</Text>
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
      </Accordion> */}
      {/* <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Text fontWeight={600}>Government Website: &nbsp;
          <Text as={'a'} href={props.job_outlook_url} fontWeight={500} >
             {props.job_outlook_url}
          </Text></Text>
          
          
        
      </Stack> */}
    </Box>
  </Center>
  )
}