import * as React from "react";
import {
  ChakraProvider,
  Box,
  Tabs,
  TabPanels,
  TabPanel,
  theme,
} from "@chakra-ui/react";
import { About } from "./pages/AboutMe";
import { Porfolio } from "./pages/Portfolio";
import { Navigation } from "./components/Navigation";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box w={"100%"} h={"100vh"}>
      <Tabs size="lg" isFitted>
        <Navigation />
        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Porfolio />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </ChakraProvider>
);
