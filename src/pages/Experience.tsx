import * as React from "react";
import { Box, Text, GridItem, Grid } from "@chakra-ui/react";

export const Experience = () => {
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
            Here is a list of my past work and notable software development
            experiences.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
