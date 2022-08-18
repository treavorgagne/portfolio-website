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
    <Box mx={"auto"} maxWidth={"1000px"}>
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
    tools: ["GitHub", "AWS"],
    description: `This is the static portfolio project you're currently navigating. This 
      portfolio showcases my Front-end skils, projects, and work experience I have done over the past 5 years 
      at UVic and on Co-ops. I developed this portfolio website using Chakra UI a React component
      library and typescript. Currently, hosted using AWS Amplify on a Route 53 custom domain.`,
  },
  {
    id: "horoscope",
    name: "Horoscope Generator",
    stacks: ["React.tsx", "Typescript"],
    tools: ["GitHub", "Netlify"],
    description: `A simple 10 hour project I developed. In all honestly, I think astrology 
      isn't really scientific in the slightest. I think the whole thing is a bit of a stretch, but 
      for those who like it to each your own. So as a joke this application produces the same 
      horoscope for all 12 zodiac signs (hehe). The horoscopes are general enough that they 
      suit any sign hence the joke. Ultimately, I developed this application to develop my 
      React.tsx skills further. As well, as developing a mobile friendly application.`,
  },
  {
    id: "arm",
    name: "Embedded ARM Machine RGB to YCC Conversion",
    stacks: ["C", "Python", "Assembly", "Hardware"],
    tools: ["ARM 32 bit Machine"],
    description: `This was an embedded final group project for the Embedded Systems course I took in 
      my last semester at UVic. For this project, our group developed an embedded C program to perform color 
      conversion which took a .bmp image in RGB format and converted it to a smaller YCC format. We optmised our code using various 
      embedded optimisation techniques, such as loop unrolling and operation strength reduction. I also designed
      a hardware assist circuitry for the ARM system to further optimize the RGB to YCC conversion. I learned how 
      to optimize C code during this project using various techniques.`,
  },
  {
    id: "redis",
    name: "Redis Bookstore Cache",
    stacks: ["Express", "Node.js", "JavaScript", "Redis", "Docker"],
    tools: ["GitHub", "Docker"],
    description: `Another 10 hour project I developed. This application allows users to order 
      books from a made up bookstore. All orders are stored in a dockerized Redis Cache database. 
      After ordering the user get some funny prompts in return response to their order. The purpose 
      of this project was to familiarize myself with more NoSql database types and dockerizing application 
      components.`,
  },
  {
    id: "trading",
    name: "Scalability Day Trading Project",
    stacks: ["React.js", "Express", "Node.js", "JavaScript", "PostgreSQL"],
    tools: ["GitHub", "AWS", "Docker"],
    description: `This was the final group project for the Software System Scalability course I took
      in my last year at UVic. For this project our group was tasked with creating a scalable mock 
      Day Trading Application. While most groups for this project used Docker to scale their applications
      client, server, and database instances our group uploaded our Docker instances to AWS to be auto scaled. 
      During this project, I got further familiar with AWS (RDS, Lambda, EC2, and S3) and Docker. I also learned the important concepts and 
      difficulties of scaling software.`,
  },
  {
    id: "lp",
    name: "Linear Programming Solver",
    stacks: ["Python"],
    tools: ["GitHub", "SSH"],
    description: `This was the final project for the Linear Programming course I took at UVIc. For this project, I 
      developed a linear program solver using Python. The solver takes a series of unsolved linear equations 
      and produces an optimal solution if it exists. The solver will also determine if the series is infeasible to 
      solve. During this course, I learned a about more about graph theory and linear optimization.`,
  },
  {
    id: "tdr",
    name: "Top Down Royal (TDR)",
    stacks: ["C++", "TCP", "UDP", "Object Orientated"],
    tools: ["Make"],
    description: `This was the final group project for the Software Architecture and Design course I took at UVic.
      This project was an online multiplayer 2-D shooter battle royale game using TCP and UDP network connections to send packets 
      of information between all the players in the game. The game supported 2 to 150 players. I a big hand in programming 
      the game mechanics and designing the overall system architecture. Created map, players, hit detection, spawning, shooting, 
      movements, and debugging various portions of the game. I used object orientated C++ to write modular code of classes to make 
      the game extensible for further content.`,
  },
  {
    id: "sql",
    name: "ACID Complient SQL Airport Database",
    stacks: ["PostgreSQL", "Python"],
    tools: ["GitHub", "SSH"],
    description: `This was the final project for the Database Systems course I took at UVIc. For this project, I 
      developed a mock airport scheduling PostgreSQL database system. In addition, I developed a set database constraints 
      to avoid invalid database entries, such as improper take off or and landing locations for given set of flights. To 
      maintain ACID principals of the database system I used transactions and rollbacks before commiting any data to the 
      database. This course taught me how to design and develop ACID complient SQL databases.`,
  },
];
