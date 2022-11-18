import { Box } from "@chakra-ui/react";
import React from "react";
import { Nav } from "../../Component/Nav";
import { BreadCrumb } from "../../Component/BreadCrump";
import { Footer } from "../../Component/Footer";
import { ShopList } from "../../Component/ShopList";
import { Search } from "../../Component/Search";
import { Link } from "react-router-dom";

export const Shopwithcateg = () => {
  return (
    <Box w="80%">
      <Nav />
      <BreadCrumb />
      <Link to="/Shop-Catogery-Location"><Search placeholderforSearch="Location of Shop" mtforsearch="1rem" /></Link>
      
      <Box m="5rem 0">
        <ShopList />
      </Box>
      <Footer />
    </Box>
  );
};
