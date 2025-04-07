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
import projects from "../assets/projects.json";

export const Porfolio = () => {
  return (
    <Box mx={"auto"} maxWidth={"1000px"}>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(1, 1fr)">
        <GridItem w={"100%"} h={"100%"} rowSpan={1} colSpan={1}>
          <Text fontSize={["20px", "24px", "32px"]}>
            Here is a list of my in-progress and completed projects. For a
            closer look feel free to visit my{" "}
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
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>
                </Heading>
              </Box>

              <Box>
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
