import Link, { LinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import React from "react";

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps;

const ChakraNextLink = React.forwardRef(({ href, children, ...props } : ChakraLinkAndNextProps, ref : any) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <ChakraLink ref={ref} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
});

ChakraNextLink.displayName = "ChakraNextLink";

export default ChakraNextLink;