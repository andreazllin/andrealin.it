import { Grid, Link as ChLink } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={5}
        as="nav"
        my={4}
        textAlign="center"
      >
        <Link href="#aboutme">
          <ChLink fontWeight={600}>Chi sono</ChLink>
        </Link>
        <Link href="#skills">
          <ChLink fontWeight={600}>Skills</ChLink>
        </Link>
        <Link href="#contact">
          <ChLink fontWeight={600}>Contattami</ChLink>
        </Link>
      </Grid>
    </>
  );
}
