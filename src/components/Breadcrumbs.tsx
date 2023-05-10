import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NextLink from "next/link";

export default function Breadcrumbs() {
  const router = useRouter();

  const nameMapping = [
    { oldName: "compare-courses", newName: "Compare Courses" },
    { oldName: "find-answer", newName: "Find Suitable Pathways" },
    { oldName: "detailed-table", newName: "Detailed Table - Occupation vs Qualification" },
    { oldName: "articles", newName: "Informative Reads" },
    { oldName: "result", newName: "Result" },
    { oldName: "occupations", newName: "Occupations" },
  ];

  const changeToMeaningfulName = (oldName: string) => {
    let newName = oldName;
    nameMapping.forEach((element) => {
      if (oldName === element.oldName) {
        newName = element.newName;
      }
    });
    return newName;
  };

  const generateBreadcrumbList = () => {
    // console.log("Breadcrumb Testing:");
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split(/[?#]/)[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumbList = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const title = changeToMeaningfulName(subpath);
      return { href, title };
    });
    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", title: "Home" }, ...crumbList];
  };

  const breadcrumbList = generateBreadcrumbList();
  // console.log(breadcrumbList);

  return (
    <Fragment>
      {breadcrumbList.length <= 1 ? (
        <Fragment></Fragment>
      ) : (
        <Container
          maxWidth={"6xl"}
          paddingY={5}
          // backgroundColor={"blue.500"}
        >
          <Breadcrumb
            spacing={2}
            separator={<ChevronRightIcon color={"gray.500"} />}
            fontSize={"sm"}
            fontWeight={"bold"}
            textColor={"gray.500"}
          >
            {breadcrumbList.map((item, idx) => (
              <BreadcrumbItem key={"breadcrumb-" + idx + item.title}>
                <BreadcrumbLink as={NextLink} href={item.href}>{item.title}</BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Container>
      )}
    </Fragment>
  );
}
