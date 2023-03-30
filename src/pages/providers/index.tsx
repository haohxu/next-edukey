import prisma from "@/lib/prisma";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { provider } from "@prisma/client";
import { GetStaticProps } from "next";

export default function Providers(props: { providers: provider[] }) {
  return (
  <Container
    alignItems={"start"}>
    <VStack
      spacing={2}
      alignItems={"start"}>
      
      {props.providers.map((item) => (
        <Box 
          key={"provider" + "-" + item.id + "-" + item.provider_name}
          border={"1px"}>
          <Heading 
            fontSize={'sm'}> 
            {item.provider_name + " (" + item.site_name + ") "} 
          </Heading>
          <Text>
            {item.address_line_1}
          </Text>
        </Box>
      ))}
    </VStack>
  </Container>
)}

export const getStaticProps: GetStaticProps = async () => {
  const providers = await prisma.provider.findMany({});

  return {
    props: { providers },
    revalidate: 10,
  };
};
