import { Code } from "@chakra-ui/react";

// interface for codeblock
interface CodeBlockProps {
  text: string;
}

// Reusable component with type annotations
export const CodeBlock: React.FC<CodeBlockProps> = ({ text }) => {
  return <Code fontSize={["18px", "20px", "20px", "22px"]}>{text}</Code>;
};
