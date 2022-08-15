import * as React from "react";
import {
  Box,
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
          <Text fontSize={["20px", "24px", "32px"]}>
            Here is a list of all my in progress and completed projects I have
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
            <Box key={project.id}>
              <Divider my={["2", "2", "4"]} />
              <Box pb={[2, 2, 3]} id={project.id} flex="1" textAlign="left">
                <Heading fontWeight={"600"} size={["md", "lg", "lg"]}>
                  {project.name}
                </Heading>
              </Box>

              <Box>
                <Text fontWeight={"600"} fontSize={["md", "lg", "lg"]}>
                  Description:
                </Text>
                <Text fontWeight={"500"} my={1}>
                  {project.description}
                </Text>
              </Box>

              <Box flex="1" textAlign="left">
                <Text
                  fontWeight={"600"}
                  pb={[0.5, 1, 1]}
                  fontSize={["md", "lg", "lg"]}
                >
                  Programming Stack:
                </Text>

                {project.stacks.map((stack) => (
                  <Tag
                    key={project.id + stack}
                    borderRadius="full"
                    variant="subtle"
                    colorScheme="green"
                    m={1}
                  >
                    <TagLabel fontWeight={"700"}>{stack}</TagLabel>
                  </Tag>
                ))}
              </Box>

              <Box flex="1" textAlign="left">
                <Text
                  fontWeight={"600"}
                  pb={[0.5, 1, 1]}
                  fontSize={["md", "lg", "lg"]}
                >
                  Development Tools:
                </Text>

                {project.tools.map((tool) => (
                  <Tag
                    key={project.id + tool}
                    borderRadius="full"
                    variant="subtle"
                    colorScheme="purple"
                    m={1}
                  >
                    <TagLabel fontWeight={"700"}>{tool}</TagLabel>
                  </Tag>
                ))}
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
    stacks: ["React.tsx", "Typescript", "Chakra UI"],
    tools: ["GitHub", "Netlify"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "horoscope",
    name: "Horoscope Generator",
    stacks: ["React.tsx", "Typescript"],
    tools: ["GitHub", "Netlify"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "redis",
    name: "Redis Bookstore Cache",
    stacks: ["Express", "Node.js", "JavaScript", "Redis", "Docker"],
    tools: ["GitHub", "Docker"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "trading",
    name: "Scalability Day Trading Project",
    stacks: ["React.js", "Express", "Node.js", "JavaScript", "PostgreSQL"],
    tools: ["GitHub", "AWS", "Docker"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "lp",
    name: "Linear Programming Solver",
    stacks: ["Python"],
    tools: ["GitHub", "SSH"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "tdr",
    name: "Top Down Royal (TDR)",
    stacks: ["C++", "TCP"],
    tools: ["Make"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "sql",
    name: "ACID Complient SQL Airport Database",
    stacks: ["PostgreSQL", "Python"],
    tools: ["GitHub", "SSH"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
];
