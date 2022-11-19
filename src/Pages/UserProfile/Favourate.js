import { Box, Center, Grid } from "@chakra-ui/react";
import React from "react";
import { ShopList } from "../../Component/ShopList";
import { Sidebar } from "../../Component/Sidebar";
import { NavBar } from "./NavBar";

export const Favourate = () => {
  return (
    <Box w="80%">
      <Grid templateColumns={"1fr 4fr"}>
        <Box bg="#413232" color="white" p="3rem">
          <Sidebar />
        </Box>
        <Box>
          <NavBar />
          <Center fontSize={"3xl"} as="b" m={"3rem"} color="white">
            Favourate
          </Center>
          <Box m="2rem">
            <ShopList />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};