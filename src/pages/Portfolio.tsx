import * as React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
  Link,
  Text,
  Heading,
  Divider,
  TagLabel,
  Tag,
} from "@chakra-ui/react";

export const Porfolio = () => {
  return (
    <Box mx={"auto"} maxWidth={"1200px"}>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(1, 1fr)">
        <GridItem
          w={"100%"}
          h={"100%"}
          rowSpan={1}
          colSpan={1}
          // bg="papayawhip"
        >
          <Text fontSize={["16px", "24px", "32px"]}>
            Here is a list of my in progress and completed projects I have
            developed. For a closer look feel free to take a look at my{" "}
            <Link
              href="https://github.com/treavorgagne?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              color="teal.600"
            >
              github
            </Link>
            .
          </Text>

          {projects.map((project) => (
            <Box>
              <Divider my={["2", "2", "4"]} />
              <Box pb={[1, 2, 3]} id={project.id} flex="1" textAlign="left">
                <Heading fontWeight={"600"} size={["md", "lg", "lg"]}>
                  {project.name}
                </Heading>
              </Box>

              <Box flex="1" textAlign="left">
                <Text pb={[0.5, 1, 1]} fontSize={["md", "lg", "lg"]}>
                  <b>Tech Stack: </b>
                  {project.stack.map((s) => (
                    <Tag
                      borderRadius="full"
                      variant="subtle"
                      colorScheme="green"
                      mx={1}
                    >
                      <TagLabel fontWeight={"700"}>{s}</TagLabel>
                    </Tag>
                  ))}
                </Text>
                <Text fontSize={["md", "lg", "lg"]}>
                  <b>Description:</b> {project.content}
                </Text>
              </Box>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};

const projects = [
  {
    id: "website",
    name: "Portfolio Website",
    stack: ["React", "Typescript", "Chakra UI", "Netlify"],
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "horoscope",
    name: "Horoscope Generator",
    stack: ["React", "Typescript", "Netlify"],
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "redis",
    name: "Redis Bookstore Cache",
    stack: ["Express", "Node.js", "Redis", "Docker"],
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "trading",
    name: "Scalability Day Trading Project",
    stack: ["React.js", "Express", "Node.js", "PostgreSQL", "AWS", "Docker"],
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "lp",
    name: "Linear Programming Solver",
    stack: ["Python"],
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "tdr",
    name: "Top Down Royal (TDR)",
    stack: ["C++", "TCP"],
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "sql",
    name: "ACID Complient SQL Airport Database",
    stack: ["PostgreSQL", "Python"],
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
];
