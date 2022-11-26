import { Box } from "@chakra-ui/react";
import React from "react";
import { Nav } from "../../Component/Nav";
import { BreadCrumb } from "../../Component/BreadCrump";
import { Footer } from "../../Component/Footer";
import { ShopList } from "../../Component/ShopList";
import { Search } from "../../Component/Search";

export const SearchPageWithcateg = () => {
  return (
    <Box w="80%">
      <Nav />
      <BreadCrumb Category="Cafa And Resturent" />
      <Search
        placeholderforSearch="Location of Shop"
        mtforsearch="1rem"
        searchto="/Shop-category"
      />
      <Box m="5rem 0">
        <ShopList />
      </Box>
      <Footer />
    </Box>
  );
};
