import * as React from "react";
import { Tab, TabList } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Navigation = () => {
  return (
    <TabList px={["2.5%", "2.5%", "10%"]}>
      <Tab>About Me</Tab>
      <Tab>Portfolio</Tab>
      <ColorModeSwitcher size="lg" />
    </TabList>
  );
};
