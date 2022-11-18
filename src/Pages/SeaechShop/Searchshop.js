import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { Catogery } from "../../Component/Catogery";
import { Footer } from "../../Component/Footer";
import { Nav } from "../../Component/Nav";

export const Searchshop = () => {
  return (
    <Box>
      <Nav />
      <Box>
        <Center fontSize={"3xl"} as="b" color={"white"}>
          Our Shop category
        </Center>
        <Catogery/>
      </Box>

      <Footer />
    </Box>
  );
};
