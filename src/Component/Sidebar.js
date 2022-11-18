import { HamburgerIcon, Search2Icon, StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CgProfile, CgHome } from "react-icons/cg";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Box>
      <HamburgerIcon />
      <Box>
        <Link to="/profile-user">
          <Flex m={"2rem 2rem 2rem 0 "}>
            <CgProfile w="1rem" /> <Text m={"-0.2rem 0 0 .5rem"}>Profile</Text>
          </Flex>
        </Link>
        <Link to="/profile-favourate">
          <Flex m={"2rem 2rem 2rem 0 "}>
            <StarIcon w="1rem" /> <Text m={"-0.2rem 0 0 .5rem"}>Favourate</Text>
          </Flex>{" "}
        </Link>
        <Link to="/Shop-category;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ">
          <Flex m={"2rem 2rem 2rem 0 "}>
            <Search2Icon w="1rem" /> <Text m={"-0.2rem 0 0 .5rem"}>Search</Text>
          </Flex>
        </Link>
        <Link to="/">
          <Flex m={"2rem 2rem 2rem 0 "}>
            <CgHome w="1rem" /> <Text m={"-0.2rem 0 0 .5rem"}>Home</Text>
          </Flex>
        </Link>
      </Box>
    </Box>
  );
};
