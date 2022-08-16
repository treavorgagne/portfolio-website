import * as React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
  Divider,
  TagLabel,
  Tag,
} from "@chakra-ui/react";

export const Experience = () => {
  return (
    <Box mx={"auto"} maxWidth={"1000px"}>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(1, 1fr)">
        <GridItem w={"100%"} h={"100%"} rowSpan={1} colSpan={1}>
          <Text fontSize={["20px", "24px", "32px"]}>
            Here is a list of all my past work and notable software development
            experiences over the last 5 years.
          </Text>

          {experiences.map((exp) => (
            <Box key={exp.id}>
              <Divider my={["2", "2", "4"]} />
              <Box pb={[2, 2, 3]} id={exp.id} flex="1" textAlign="left">
                <Heading fontWeight={"600"} size={["md", "lg", "lg"]}>
                  {exp.name}
                </Heading>
              </Box>
              <Box>
                <Text fontWeight={"500"} my={1}>
                  {exp.description}
                </Text>
              </Box>

              <Box>
                <Text
                  fontWeight={"600"}
                  pb={[0.5, 1, 1]}
                  fontSize={["md", "lg", "lg"]}
                >
                  Programming Stack:
                </Text>
                {exp.stacks.map((stack) => (
                  <Tag
                    key={exp.id + stack}
                    borderRadius="full"
                    variant="subtle"
                    colorScheme="green"
                    m={1}
                  >
                    <TagLabel fontWeight={"700"}>{stack}</TagLabel>
                  </Tag>
                ))}
              </Box>

              <Box>
                <Text
                  fontWeight={"600"}
                  pb={[0.5, 1, 1]}
                  fontSize={["md", "lg", "lg"]}
                >
                  Development Tools:
                </Text>
                {exp.tools.map((tool) => (
                  <Tag
                    key={exp.id + tool}
                    borderRadius="full"
                    variant="subtle"
                    colorScheme="purple"
                    m={1}
                  >
                    <TagLabel fontWeight={"700"}>{tool}</TagLabel>
                  </Tag>
                ))}
              </Box>

              <Box fontWeight={"600"} flex="1" textAlign="left">
                <Box>
                  <Text pb={[0.5, 1, 1]} fontSize={["md", "lg", "lg"]}>
                    Software Practices:
                  </Text>
                  {exp.practices.map((practice) => (
                    <Tag
                      key={exp.id + practice}
                      borderRadius="full"
                      variant="subtle"
                      colorScheme="orange"
                      m={1}
                    >
                      <TagLabel fontWeight={"700"}>{practice}</TagLabel>
                    </Tag>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};

const experiences = [
  {
    id: "capestone",
    name: "Scheduling Cap Stone Project",
    stacks: ["Golang", "Python", "TypeScript"],
    tools: ["Docker", "Heroku", "Github", "ZenHub", "Slack", "Discord"],
    practices: [
      "Agile Development",
      "Sprints",
      "CI/CD",
      "Unit Testing",
      "Integration Testings",
      "Plug & Play",
      "Multi-Team",
    ],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "government",
    name: "NRCan Software Developer Co-op",
    stacks: ["HTML", "CSS", "JavaScript", "JQuery", "PHP", "MySQL"],
    tools: ["GitLab", "Microsoft Teams"],
    practices: ["Agile Development", "WCAG Complience"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "solaris",
    name: "Frontend Web Developer Part-time",
    stacks: ["HMTL", "CSS", "Bootstrap", "JavaScript", "React.js"],
    tools: ["Heroku", "GitLab", "Rocket.Chat"],
    practices: ["Agile Development", "UX to UI"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "ergo",
    name: "Full Stack Web Developer Co-op",
    stacks: [
      "Python",
      "Flask",
      "HMTL",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
    ],
    tools: ["GitLab", "Heroku", "Rocket.Chat"],
    practices: ["Agile Development"],
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
];
