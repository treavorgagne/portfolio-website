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
    description: [
      `Project designed to apply all the accumulated Software Engineering knowledge and skills learnt while at UVic and on Co-ops. 
      For this project 80 students were split into 4 companies of 20 students each. All 4 companies were 
      assigned the same NP-Complete problem of creating an application which could generate schedule of courses for 
      the faculty of Software Engineering at UVic. This problem is an NP-Complete problem as there is an near infinite set of 
      optimal solutions for a given schedule based on the list of professors and courses for a given year of semesters. Also, as a part of 
      this project each company was required to perform plug and play actions with one other company's Front-end, Back-end, 
      Schedule Generation Algorithm (Alg 1), and Course Capacity Prediction Algorithm (Alg 2).`,
      `Team members of my company were assigned to 1 of 4 sub-teams (Front-end, Back-end, Alg 1, and Alg 2). In addition, some 
      members of each sub-team were apart of an integration guild along with members of the company we were doing plug and play with. 
      The integration guild was responsible for deploying each the applications micro-service, testing, and communicating specification changes among both
      sub-teams and companies. Ultimately, I was apart of the Alg 1 sub-team and the integration guild. As mentioned previously,
      the Alg 1 sub-team was responsible for generating schedules. For our solution we used Golang in order to make the algorithm as 
      fast as possible. Ultimately, our solution was a genetic algorithm and performed various simulation on a population set in order 
      to find an improved schedule after each simulation. Largely, my contribution to our solution focused on developing algorithmic constraints 
      to avoid infeasible schedules, such as a professor teaches two courses at the same time. Furthermore, as a part of the guild 
      I created various unit and integration tests testing features related to plug and play with either companies Alg 1. Lastly, I helped develop a route 
      callable by the Front-end to check if a manually edited schedule is still valid. Overall, our application was able to generate schedules with an execution 
      time ranging from 2 to 5 seconds end to end depending on the size of the course and professor input. Where end to end is Front-end to Back-end to Alg 2 to 
      Alg1 back to Back-end and finally back to Front-end with the generated schedule.`,
      `For this project, our company followed and used many best agile software development practices, such as sprint planning and retros. 
      Ultimately, this project gave me the opportunity apply and learn new technical and soft skills in multiple areas in the software development lifecycle.`,
    ],
  },
  {
    id: "government",
    name: "CHIS NRCan Software Developer Co-op",
    stacks: ["HTML", "CSS", "JavaScript", "JQuery", "PHP", "MySQL", "LAMP"],
    tools: ["GitLab", "Microsoft Teams", "Linux", "Apache"],
    practices: ["Agile Development", "WCAG Complience"],
    description: [
      `An 8-month Government Co-op at the Canadien Hazards Information Services (CHIS) branch at National Resource Canada (NRCan) as a Software Developer. Worked in 
      a Full-Stack capacity using the LAMP stack (Linux, Apache, MySQL, PHP). For this co-op I was tasked with improving old and developing new 
      features showcasing seismic data from the Western Canada Deformation Array. Features included creating real-time data visualization graphs 
      for each seismic station over time, station status tables, among others. All features were complient with Web Content Accessibility Guidelines for 
      those with visual or other imparments. In addtion, all features were developed with English and French suport for all citizens in Canada. 
      I also optimized some legacy aggregate and group by SQL queries improving runtime up to 50% in some cases.`,
    ],
  },
  {
    id: "ergo",
    name: "Full Stack Web Developer Ergonnomyx Tech. Canada Co-op",
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
    practices: ["Agile Development", "Start-Up", "CI/CD"],
    description: [
      `An 8-month start-up developing two full-stack applications related to a standing desk including a web-application and an 
      ecommerce website hosted on Heroku. The web-application was used to view usage data for users of the desk and the ecommerce 
      site was used to purchase and customize the desk. For this co-op, I got to directly interact with the client to deliver code and receive 
      immediate feedback on the changes made. As such, I implemented a cart checkout feature for the ecommerce website and a feature to view 
      desk current and past uasge data on the web-app. On this co-op, I got to touch a wide range of programming stack and tools, such as PostgreSQL, MongoDB, 
      and Heroku for CI/CD deployment.`,
    ],
  },
  {
    id: "solaris",
    name: "Front-end Web Developer Solaris Ent. Inc. Part-time",
    stacks: ["HMTL", "CSS", "Bootstrap", "JavaScript", "React.js"],
    tools: ["Heroku", "GitLab", "Rocket.Chat"],
    practices: ["Agile Development", "UX to UI"],
    description: [
      `Part-time position developing a static website using React.js to bring a solar initiative start-up website to life. Transformed wireframes designed 
       by the UX team to functional React.js code which was mobile friendly. Improved Front-end skills and knowledge.`,
    ],
  },
];
