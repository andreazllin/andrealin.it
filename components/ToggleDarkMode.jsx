import { Box, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position="fixed" bottom={5} right={5}>
      <IconButton
        onClick={toggleColorMode}
        size="lg"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      />
    </Box>
  );
}
