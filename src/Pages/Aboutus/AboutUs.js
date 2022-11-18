import { Box, Center, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../../Component/Footer";
import { Nav } from "../../Component/Nav";

export const AboutUs = () => {
  return (
    <Box w="80%">
      <Nav />
      <Box m="5rem">
        <Center fontSize={"3xl"} as="b" color={"white"}>
          About Us
        </Center>
        <Center
          fontSize={"1.5rem"}
          as="b"
          color={"white"}
          fontVariant="petite-caps"
          p="1rem"
        >
          Our Mission is Navigate Nearby Shops
        </Center>
        <Box as="b" color={"white"}>
          <Center mt={".5rem"}>
            Trusted Shops makes it simple and guarantees openness{" "}
          </Center>
          <Center mt={".5rem"}>so that we can depend on making the </Center>
          <Center mt={".5rem"}>right choices when locating </Center>
          <Center mt={".5rem"}> nearby shops. </Center>
        </Box>
        <Box bg="#5e3636" m="5rem 0" p="2rem">
          <Center as="b" color={"white"}>
            Best Choice To Navigate Near By Shop From House
          </Center>
          <Grid templateColumns={"repeat(2, 1fr)"}>
            <Center>
              <Image alt="sale" src={process.env.PUBLIC_URL + "/sale.png"} />
            </Center>
            <GridItem p="7rem" mt={"2rem"}>
              <Center as="b" color={"white"}>
                We provide service for the people to locate the shop near their
                living area show they dont have to search shop for hour and
                hours. We are an national company with more trust, more security
                and more transparency.
                if
              </Center>
              
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
