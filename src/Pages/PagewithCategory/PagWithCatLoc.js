import { Box } from "@chakra-ui/react";
import React from "react";
import { Nav } from "../../Component/Nav";
import { BreadCrumb } from "../../Component/BreadCrump";
import { Footer } from "../../Component/Footer";
import { ShopList } from "../../Component/ShopList";

export const PagWithCatLoc = () => {
  return (
    <Box w="80%">
      <Nav />
      <BreadCrumb
        Category="Cafa And Resturent"
        City="Kathmandu"
        Area="Balauj"
        Street="Balajuhight"
      />
      <Box m="5rem 0">
        <ShopList />
      </Box>
      <Footer />
    </Box>
  );
};
