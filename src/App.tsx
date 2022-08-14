import * as React from "react";
import {
  ChakraProvider,
  Box,
  Tabs,
  TabPanels,
  TabPanel,
  theme,
  Divider,
} from "@chakra-ui/react";
import { About } from "./pages/AboutMe";
import { Porfolio } from "./pages/Portfolio";
import { Experience } from "./pages/Experience";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box w={"100%"} h={"100vh"}>
      <Tabs defaultIndex={1} size={["md", "md", "lg"]} isFitted>
        <Navigation />
        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Porfolio />
          </TabPanel>
          <TabPanel>
            <Experience />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Divider></Divider>
      <Footer />
    </Box>
  </ChakraProvider>
);
