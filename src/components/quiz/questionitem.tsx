import { FormControl, FormHelperText, FormLabel, Heading, Button,  } from "@chakra-ui/react"

export default function QuestionItem (props: {}) {
  return (
    <FormControl textAlign={'inherit'}>
          <FormLabel textAlign={'inherit'}></FormLabel>
          <Heading>Question 1</Heading>
          <Heading>What is your...</Heading>
          <Button 
            >A</Button>
          <Button 
            >B</Button>
          <FormHelperText></FormHelperText>
        </FormControl>
  )
}