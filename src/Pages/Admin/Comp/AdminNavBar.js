import { Box, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { Link } from "react-router-dom";

export const AdminNavBar = () => {
  return (
   <Center p="2rem" color="white">
        <Link to="/">
          <Flex>
            Shop
            <Box m=".5rem 0 0 1rem">
              <MdOutlineScreenSearchDesktop size={40} />
            </Box>
          </Flex>
          <Text mt="-1.5rem"> Search</Text>
        </Link>
      </Center>
  );
};
