import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { AiOutlineUsergroupAdd, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Grid
      templateColumns={"14fr 2fr 2fr 1fr"}
      textColor="white"
      mt=".5rem"
      mb=".5rem"
    >
      <Box>
        <Link to="">
          <Flex>
            Shop
            <Box m=".5rem 0 0 1rem">
              <MdOutlineScreenSearchDesktop size={40} />
            </Box>
          </Flex>
          <Text mt="-1.5rem"> Search</Text>
        </Link>
      </Box>
      <Link to="/about-us">
        <Box mt=".7rem"> About Us</Box>
      </Link>

      <Link to="/register" >
        <Flex mt=".7rem">
          <Box mt=".2rem">
            <AiOutlineUsergroupAdd size={20} />
          </Box>
          SignUp
        </Flex>
      </Link>
      <Link  to="/log-in">
        <Flex mt=".7rem">
          <Box mt=".2rem">
            <AiOutlineUser size={20} />
          </Box>
          LogIn
        </Flex>
      </Link>
    </Grid>
  );
};
