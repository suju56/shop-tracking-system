import { Box, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Grid
      templateColumns={" 13fr 1fr 2fr"}
      textColor="white"
      mt=".5rem"
      mb=".5rem"
      p={"2rem"}
    >
      <Box>
        <Link to="/">
          <Flex>
            Shop
            <Box m=".5rem 0 0 1rem">
              <MdOutlineScreenSearchDesktop size={40} />
            </Box>
          </Flex>
          <Text mt="-1.5rem"> Search</Text>
        </Link>
      </Box>
      <Center>
        <Image
          src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
          w="2.5rem"
          height="2.5rem"
          borderRadius="100%"
          objectFit="cover"
          cursor="pointer"
        />
      </Center>

      <Center>Sujana Amgain</Center>
    </Grid>
  );
};
