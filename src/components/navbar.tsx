import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Center,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";
import ChakraNextLink from "./chakra-next-link";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        maxH={"100px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Center width={"full"}>
          <Flex
            flex={{ base: 1 }}
            // justify={{ base: "center", md: "start" }}
            justify={{ base: "center" }}
            maxWidth={"6xl"}
          >
            <ChakraNextLink href={"/"}>
              <Image
                boxSize={"60px"}
                objectFit={"contain"}
                src="/static/EDUKEY_Logo.png"
                alt="EduKey Logo"
              />
            </ChakraNextLink>

            <Text
              paddingLeft={1}
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"kelly_slab"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              alignSelf={"center"}
            >
              <Link as={NextLink} href="/" legacyBehavior>
                EduKey
              </Link>
            </Text>
            <Spacer display={{ base: "none", md: "block" }}></Spacer>
            <Flex
              display={{ base: "none", md: "flex" }}
              ml={10}
              align={"center"}
            >
              <DesktopNav />
            </Flex>
          </Flex>
        </Center>

        <Flex
          // flex={{ base: 1, md: "auto" }}
          mr={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            cursor={"default"}
            color={"white"}
            opacity={0}
            isDisabled
            _disabled={{ opacity: 0, color: "white" }}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation 2"}
          />
        </Flex>

        {/* <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.400"}
            href={"#"}
            _hover={{
              bg: "blue.300",
            }}
          >
            Sign Up
          </Button>
        </Stack> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <ChakraNextLink
                href={navItem.href ?? "#"}
                p={2}
                // href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={"semibold"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </ChakraNextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <ChakraNextLink
      href={href ?? "#"}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={"semibold"}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </ChakraNextLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        // as={Link}
        // href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children && // TODO: use ChakraNextLink to improve loading
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href ?? ""}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Find Pathways",
    children: [
      {
        label: "Find Suitable Pathways",
        subLabel: "Based on your interests and strengths",
        href: "/find-answer",
      },
      {
        label: "Compare Courses",
        subLabel: "Between at most 3 different courses",
        href: "/compare-courses",
      },
    ],
    href: "",
  },
  {
    label: "Insights",
    children: [
      {
        label: "Statistics on VET Graduates",
        subLabel: "To see how VET Graduates work",
        href: "/#homepage-stats-1-1412",
      },
      {
        label: "Statistics on Qualifications",
        subLabel: "To see how qualifications impact occupations",
        href: "/#homepage-stats-2-1412",
      },
    ],
    href: "",
  },
  // {
  //   label: "Good Stats on VET Grads",
  //   href: "/statistics",
  // },
];
