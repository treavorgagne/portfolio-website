import * as React from "react";
import { Box, Text, Stack, Image, Code } from "@chakra-ui/react";
import Headshot from "../Headshot.jpg";

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
            I recently graduated with a Bachelor of Software Engineering (BSEng)
            from the University of Victoria. I have almost 4 years software
            development experience.
          </Text>
          <Text pt={2}>
            At UVic, I completed 16 months of Co-ops and some part-time work in
            industry gaining Full-Stack experience. While using a wide range of
            tech stacks and agile developement practices.
          </Text>
          <Text pt={2}>
            I have completed a number of academic and personal projects using
            different programming languages and development tools. My favourite
            language to use is{" "}
            <Code fontSize={["18px", "24px", "26px", "28px"]}>Golang</Code>{" "}
            because of its simplicity and performance benefits.
          </Text>
          <Text pt={2}>
            I am looking for full-time positions as a Full-Stack Software
            Engineer in pursuit of my dream position as a Product Manager or
            Lead.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
