import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function CallToAction() {
  return (
    <Flex direction={"column"} minHeight={{ base: "75vh", md: "90vh" }}>
      <Spacer />
      <Center>
        <Stack
          direction={"column"}
          textAlign={"center"}
          // minHeight={"90vh"}
          spacing={{ base: 8, md: 14 }}
          // py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Do You Wanna Explore
            <Text color={"blue.400"}>Offbeat Pathways</Text>
            <Text
              paddingTop={{ base: "1", md: "2" }}
              fontSize={{ base: "md", sm: "xl", md: "2xl" }}
            >
              After High School?
            </Text>
          </Heading>

          <Text color={"gray.500"}>
            Don&apos;t worry!
            <br />
            There are plenty of alternative education leading students to
            success!
            <br />
            Find them based on interests and strengths!
          </Text>
          <Stack
            direction={"column"}
            spacing={10}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              alignSelf={"center"}
            >
              {/* <Button
                colorScheme={"gray"}
                bg={"gray.300"}
                rounded={"lg"}
                px={6}
                _hover={{
                  bg: "gray.400",
                }}
              >
                Inside Your School
              </Button> */}
              <NextLink href={"/find-answer"} passHref legacyBehavior>
                <Button
                  as={"a"}
                  colorScheme={"blue"}
                  // bg={'green.400'}
                  rounded={"lg"}
                  rightIcon={<ArrowForwardIcon />}
                  px={6}
                >
                  Find Suitable Pathways
                </Button>
              </NextLink>
            </Stack>

            <Box display={{ base: "none", sm: "none", md: "contents" }}>
              <Icon
                as={Arrow}
                transform={{ base: "rotate(90deg)", md: "none" }}
                color={"gray.800"}
                w={71}
                position={"absolute"}
                // right={-71}
                right={{ base: "15px", sm: "210px", md: "-70px" }}
                // top={'80px'}
                top={{ base: "150px", sm: "50px", md: "15px" }}
              />
              <Text
                fontSize={"lg"}
                fontFamily={"Caveat"}
                position={"absolute"}
                // right={'-100px'}
                right={{ base: "0px", sm: "200px", md: "-100px" }}
                // top={'60px'}
                top={{ base: "120px", sm: "40px", md: "-10px" }}
                transform={{ base: "rotate(-10deg)", md: "rotate(10deg)" }}
              >
                Click Here!
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Center>
      <Spacer />
    </Flex>
  );
}

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
