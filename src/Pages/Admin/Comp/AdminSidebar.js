import { HamburgerIcon, Search2Icon, StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CgProfile, CgHome } from "react-icons/cg";
import { FaUserTie } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <Box>
      <HamburgerIcon />
      <Box>
        <Link to="/admin-profile">
          <Flex m={"2rem 2rem 2rem 0 "}>
            <CgProfile w="1rem" /> <Text m={"-0.2rem 0 0 .5rem"}>Profile</Text>
          </Flex>
        </Link>
        <Link to="/admin-user-management">
          <Flex m={"2rem 2rem 2rem 0 "}>
            <FaUserTie w="1rem" /> <Text m={"-0.2rem 0 0 .5rem"}>User</Text>
          </Flex>
        </Link>
        <Link to="/admin-shop-management">
          <Flex m={"2rem 2rem 2rem 0 "}>
            <GiShop w="1rem" /> <Text m={"-0.2rem 0 0 .5rem"}>Shop</Text>
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
