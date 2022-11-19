import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";
import { Catogery } from "../../Component/Catogery";
import { Footer } from "../../Component/Footer";

import { Nav } from "../../Component/Nav";
import { Search } from "../../Component/Search";
import { Morebotton } from "../../Component/Morebotton";
import { HomeBoby } from "./HomeBoby";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box>
      <Nav />
      <HomeBoby />
      <Link to="/Shop-category">
        <Search placeholderforSearch="Choose category" />
      </Link>
      <Catogery />
      <Link to="/search-shop">
        <Morebotton morebutton="Click Hear For More" />{" "}
      </Link>
      <Box bg="#8eb4b7" borderRadius="8rem" m="5rem 0">
        <Center p="2rem">
          <Image
            alt="map"
            src={process.env.PUBLIC_URL + "/shopping.png"}
            h="16rem"
            w="14rem"
            mr={"3rem"}
          />
          <Image
            alt="map"
            src={process.env.PUBLIC_URL + "/map.jpg"}
            h="20rem"
            w="14rem"
          />
          <Image
            alt="map"
            src={process.env.PUBLIC_URL + "/shopping2.png"}
            h="16rem"
            w="14rem"
            ml={"3rem"}
          />
        </Center>
      </Box>
      <Footer />
    </Box>
  );
};
