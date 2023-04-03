import OccupationItem from "@/components/find/occupationItem";
import { Center, Heading, Container, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useQuizResultStore } from "../_app";


export default function QuizResultPage() {
  const {quizResultResponse, setQuizResultResponse} = useQuizResultStore();
  const divisionList = quizResultResponse;

  return (
    <>
      <Center>
      <Heading marginY={'8'}>Result</Heading>
      </Center>
      <Container maxWidth={'1600px'}>
        
          <Tabs isFitted align='center' variant='soft-rounded' colorScheme={'blue'} >
            <TabList mb='1em' overflow={'auto'}>
            {divisionList.map( (item: any) => (
            <Tab key={'division-'+ item.anzsic_division} minWidth={'200'} maxWidth={'600'}>{item.anzsic_division}</Tab>
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
  )
}