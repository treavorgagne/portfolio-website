import * as React from "react";
import { Box, Text, Stack, Grid, GridItem, Image } from "@chakra-ui/react";
import Headshot from "../Headshot.jpg";

export const About = () => {
  return (
    <Box mx={"auto"} maxWidth={"1200px"}>
      <Grid
        templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(1, 1fr)"]}
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(4, 1fr)"]}
      >
        <GridItem w={"100%"} h={"100%"} rowSpan={2} colSpan={1} bg="tomato">
          <Stack direction={["column", "row", "column"]}>
            <Image
              boxSize={["50%", "50%", "100%"]}
              alignSelf={["center", "start", "center"]}
              src={Headshot}
              alt="Treavor Gagne Headshot"
            />
            <Box px={[2, 0, 2]} pb={[2, 2, 2]} pt={[0, 2, 0]}>
              <Text>Test</Text>
            </Box>
          </Stack>
        </GridItem>
        <GridItem
          p={3}
          w={"100%"}
          h={"100%"}
          rowSpan={2}
          colSpan={3}
          bg="papayawhip"
        >
          <Box>
            <Text>Test</Text>
          </Box>
          <Box>
            <Text>Test</Text>
          </Box>
          <Box>
            <Text>Test</Text>
          </Box>
          <Box>
            <Text>Test</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
