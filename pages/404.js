import {
  Flex,
  VStack,
  Text,
  HStack,
  Box,
  Link as ChLink,
} from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <VStack>
        <Box w="80%" borderColor="gray.200">
          <img src="/images/404notfound.svg" alt="404 Not Found" />
        </Box>
        <Box borderColor="gray.200">
          <Link href="/">
            <HStack as={ChLink}>
              <Text fontSize={{ base: "5xl", lg: "6xl" }} fontWeight={900}>
                Torna
              </Text>
              <Text
                as="span"
                fontSize={{ base: "5xl", lg: "6xl" }}
                fontWeight={900}
                color="green.500"
              >
                Indietro
              </Text>
            </HStack>
          </Link>
        </Box>
      </VStack>
    </Flex>
  );
}
