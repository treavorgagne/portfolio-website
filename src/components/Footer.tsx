import {
  Box,
  HStack,
  Link,
  Button,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box minHeight={"60px"}>
      <HStack
        mx={"auto"}
        h={"60px"}
        maxWidth={"600px"}
        justify={"space-around"}
        align={"center"}
      >
        {icons.map((icon) => (
          <Box key={icon.id}>
            <Tooltip
              placement="top"
              hasArrow
              colorScheme="blue"
              label={icon.tip}
              openDelay={400}
            >
              <Link
                href={icon.link}
                target="_blank"
                {...(icon.isExternal ? {} : { rel: "noopener noreferrer" })}
              >
                <Button
                  h={["40px", "60px"]}
                  bgColor={colorMode === "light" ? "white" : "gray.800"}
                >
                  {icon.icon}
                </Button>
              </Link>
            </Tooltip>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

const icons = [
  {
    id: "mail",
    tip: "Contact me",
    icon: <RiMailSendFill size={36} />,
    link: "mailto:gagnetreavor@gmail.com",
    isExternal: false,
  },
  {
    id: "linkedin",
    tip: "Link with me",
    icon: <FaLinkedin size={36} />,
    link: "https://www.linkedin.com/in/treavorgagne/",
    isExternal: false,
  },
  {
    id: "github",
    tip: "See my GitHub Projects",
    icon: <FaGithub size={36} />,
    link: "https://github.com/treavorgagne?tab=repositories",
    isExternal: false,
  },
];
