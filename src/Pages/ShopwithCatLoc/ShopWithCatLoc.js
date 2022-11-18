import { Box } from "@chakra-ui/react";
import React from "react";
import { Nav } from "../../Component/Nav";
import { BreadCrumb } from "../../Component/BreadCrump";
import { Footer } from "../../Component/Footer";
import { ShopList } from "../../Component/ShopList";

export const ShopwithCatLoc = () => {
  return (
    <Box w="80%">
      <Nav />
      <BreadCrumb />
      <Box m="5rem 0">
        <ShopList/>
      </Box>
      <Footer />
    </Box>
  );
};
