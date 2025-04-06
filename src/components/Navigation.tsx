import { Tab, TabList } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Navigation = () => {
  return (
    <TabList px={["1%", "2%", "2%", "15%"]}>
      <Tab>About Me</Tab>
      <Tab>Portfolio</Tab>
      <Tab>Experience</Tab>
      <ColorModeSwitcher alignSelf={"center"} size={["md", "md", "lg"]} />
    </TabList>
  );
};
