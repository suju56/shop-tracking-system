import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { ShopList } from "../../Component/ShopList";
import { ServicerSidebar } from "../ServicerProfile/ServicerSidebar";
import { NavBar } from "./NavBar";

export const Favourate = () => {
  return (
    <Box w="80%">
      <Grid templateColumns={"1fr 4fr"}>
        <Box bg="#413232" color="white" p="3rem">
          <ServicerSidebar />
        </Box>
        <Box>
          <NavBar />
          <Box m="2rem">
            <ShopList />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
    