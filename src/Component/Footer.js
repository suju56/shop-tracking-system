import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { IoLogoInstagram, IoMailOpenSharp } from "react-icons/io5";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <Box mb="5rem" bg={"#6a3b3b"}>
      <Grid templateColumns="repeat(3, 1fr)" p="2rem">
        <GridItem>
          <Flex
            flexDirection={"column"}
            gap={{ lg: "1rem", base: "0" }}
            fontSize={{ lg: "1rem", base: "0.75rem" }}
          >
            <Box as={"b"} color="white">
              <Flex>
                Shop
                <Box m=".5rem 0 0 1rem">
                  <MdOutlineScreenSearchDesktop size={40} />
                </Box>
              </Flex>
              <Text mt="-1.5rem"> Search</Text>
            </Box>

            <Text as="b" color={"white"}>
              <NavLink to="/">Home</NavLink>
            </Text>
            <Text as="b" color={"white"}>
              <NavLink to="/about-us">AboutUs</NavLink>
            </Text>
            <Text as="b" color={"white"}>
              <NavLink to="/login">LogIn</NavLink>
            </Text>
            <Text as="b" color={"white"}>
              <NavLink to="/signup">SignUp</NavLink>
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          gridRow={{ lg: "1", base: "2" }}
          gridColumn={{ lg: "2", base: "1" }}
        >
          <Flex
            flexDirection={"column"}
            gap={{ lg: "1rem", base: "0" }}
            fontSize={{ lg: "1rem", base: "0.75rem" }}
          >
            <Text as="b" color={"white"}>
              <NavLink to="/shop-catogery">Shop Catogery</NavLink>
            </Text>
            <Text as="b" color={"white"}>
              <NavLink to="/AboutUs">New Arrival</NavLink>
            </Text>
            <Text as="b" color={"white"}>
              <NavLink to="/login">Login</NavLink>
            </Text>
            <Text as="b" color={"white"}>
              <NavLink to="/signup">Signup</NavLink>
            </Text>
          </Flex>
        </GridItem>
        <GridItem >
          <Flex
            flexDirection={"column"}
            gap={{ lg: "1rem", base: "0" }}
            fontSize={{ lg: "1rem", base: "0.75rem" }}
            as="b"
            color={"white"}
          >
            <Text>Contacts</Text>
            <Flex as="b" color={"white"} gap=".5rem">
              <IoMailOpenSharp fontSize={"20px"} /> shopsearch@gmail.com
            </Flex>
            <Flex as="b" color={"white"} gap=".5rem">
              <IoCallSharp fontSize={"20px"} /> +123456789
            </Flex>
            <Flex as="b" color={"white"} gap=".5rem">
              <IoLocationSharp fontSize={"20px"} /> Balajuhight Balaju Kathmandu
            </Flex>
            <Box>
              <Flex>
                <a href="#" target={"_blank"}>
                  <IoLogoFacebook
                    fontSize={"30px"}
                    style={{ marginRight: "10px" }}
                  />
                </a>
                <a href="#" target={"_blank"}>
                  <IoLogoInstagram
                    fontSize={"30px"}
                    style={{ marginRight: "10px" }}
                  />
                </a>
                <a href="#" target={"_blank"}>
                  <IoLogoYoutube
                    fontSize={"30px"}
                    style={{ marginRight: "10px" }}
                  />
                </a>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
