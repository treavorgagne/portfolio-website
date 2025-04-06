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
import experiences from "../assets/experience.json";

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
                {exp.description.map((d) => (
                  <Text key={exp.id} fontWeight={"500"} my={2}>
                    {d}
                  </Text>
                ))}
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
