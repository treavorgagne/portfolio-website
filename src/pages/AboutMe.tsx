import { Box, Text, Stack, Image, Link } from "@chakra-ui/react";
import Headshot from "../assets/Headshot.jpg";
import { CodeBlock } from "../components/CodeBlock";

export const About = () => {
  return (
    <Box mx={"auto"} maxWidth={"1000px"}>
      <Stack direction={"row"}>
        <Box w={["50%", "50%", "50%", "40%"]} h="100%" alignSelf={"center"}>
          <Text fontSize={["24px", "24px", "36px"]}>Hi, my name is</Text>
          <Text fontSize={["46px", "46px", "54px"]}>Treavor Gagne</Text>
        </Box>
        <Box w={["50%", "50%", "50%", "60%"]}>
          <Image
            mx={"auto"}
            maxHeight={"300px"}
            maxWidth={"300px"}
            w={"100%"}
            alignSelf={"center"}
            src={Headshot}
            alt="Treavor Gagne Headshot"
            borderRadius={"50%"}
          />
        </Box>
      </Stack>
      <Stack direction={"column"}>
        <Box fontSize={["18px", "24px", "26px", "28px"]}>
          <Text pt={2}>
            Currently, I am a Software Developer at{" "}
            <Link
              href="https://www.ssicanada.com"
              target="_blank"
              rel="noopener noreferrer"
              color="teal.600"
            >
              SSi Canada
            </Link>{" "}
            with over 5 years of experience, including full-time, part-time, and
            co-op positions. In 2022, I completed my Bachelor of Software
            Engineering (BSEng) with honors from the University of Victoria
            (UVic).
          </Text>
          <Text pt={2}>
            I have a strong background in Full-Stack Software Development,
            working with <CodeBlock text="Node.js" /> frameworks such as{" "}
            <CodeBlock text="React.js and Express.js" />. I also have experience
            with both relational and non-relational databases, including{" "}
            <CodeBlock text="MySQL and MongoDB" />, and am proficient in various
            software tools like{" "}
            <CodeBlock text="Git, Postman, Splunk, and Twilio" />. With my broad
            software knowledge and experience, I am confident in my ability to
            quickly adapt to new programming languages and technologies.
          </Text>
          <Text pt={2}>
            I have worked on various academic and personal projects using a
            range of programming languages and development tools. My preferred
            language is <CodeBlock text="Golang" /> to its simplicity and
            performance advantages.
          </Text>
          <Text pt={2}>
            As a developer, I am always eager to learn and take on new
            challenges, continually expanding my skills and staying up-to-date
            with emerging technologies.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
