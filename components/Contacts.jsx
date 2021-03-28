import { VStack, HStack, Icon, Link } from "@chakra-ui/react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

export default function Contacts() {
  return (
    <>
      <VStack spacing={2} align="left">
        <HStack>
          <Icon as={FaGithubAlt} fontSize="xl" color="gray.700" />
          <Link
            fontSize="md"
            fontWeight={600}
            href="https://github.com/nilaerdna"
          >
            @nilaerdna
          </Link>
        </HStack>
        <HStack>
          <Icon as={FaLinkedinIn} fontSize="xl" color="blue.600" />
          <Link
            fontSize="md"
            fontWeight={600}
            href="https://www.linkedin.com/in/andrea-lin-583653206/"
          >
            LinkedIn
          </Link>
        </HStack>
        <HStack>
          <Icon
            as={FaTwitter}
            fontSize="xl"
            color="blue.300"
            href="https://twitter.com/nilaerdna"
          />
          <Link fontSize="md" fontWeight={600}>
            @nilaerdna
          </Link>
        </HStack>
        <HStack>
          <Icon as={FaEnvelope} fontSize="xl" color="orange.300" />
          <Link
            fontSize="md"
            fontWeight={600}
            href="mailto:info@andrealin.it?subject=Ciao Andrea! Abbiamo una proposta interessante per te."
          >
            info@andrealin.it
          </Link>
        </HStack>
      </VStack>
    </>
  );
}
