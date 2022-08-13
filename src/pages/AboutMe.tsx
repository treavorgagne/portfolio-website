import * as React from "react";
import {
  Box,
  Text,
  Stack,
  Link,
  Grid,
  GridItem,
  Code,
  Image,
} from "@chakra-ui/react";
import { Logo } from "../Logo";

export const About = () => {
  return (
    <Box px={["2.5%", "2.5%", "10%"]}>
      <Grid
        templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(1, 1fr)"]}
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(4, 1fr)"]}
        gap={2}
      >
        <GridItem w={"100%"} h={"100%"} rowSpan={2} colSpan={1} bg="tomato">
          <Stack p={"3"} direction={["row", "row", "column"]}>
            <Image
              alignSelf={["start", "start", "center"]}
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Box>
              <Text>Test</Text>
            </Box>
          </Stack>
        </GridItem>
        <GridItem
          w={"100%"}
          h={"100%"}
          rowSpan={2}
          colSpan={3}
          bg="papayawhip"
        />
      </Grid>
    </Box>
  );
};
