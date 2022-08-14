import * as React from "react";
import {
  Box,
  HStack,
  Link,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

const icons = [
  {
    id: "mail",
    icon: <RiMailSendFill size={36} />,
    link: "mailto:gagnetreavor@gmail.com",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin size={36} />,
    link: "https://www.linkedin.com/in/treavorgagne/",
  },
  {
    id: "github",
    icon: <FaGithub size={36} />,
    link: "https://github.com/treavorgagne?tab=repositories",
  },
];

export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box minHeight={["5vh", "10vh", "10vh"]}>
      <HStack
        mx={"auto"}
        h={["5vh", "10vh", "10vh"]}
        maxWidth={"800px"}
        justify={"space-around"}
        align={"center"}
      >
        {icons.map((icon) => (
          <Box id={icon.id}>
            <Link href={icon.link} target="_blank" rel="noopener noreferrer">
              <Button
                h={["40px", "60px"]}
                bgColor={colorMode === "light" ? "white" : "gray.800"}
              >
                {icon.icon}
              </Button>
            </Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};
