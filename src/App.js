import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Routes, Route } from "react-router-dom";
import { Box, ChakraProvider, extendTheme, Container } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

import { Home } from "./Pages/Home/Home";
import { LogIn } from "./Pages/logIn/LogIn";
import { Searchshop } from "./Pages/Category/Category";
import { AboutUs } from "./Pages/Aboutus/AboutUs";
import { ShopwithCatLoc } from "./Pages/PagewithCategory/PagWithCatLoc";
import { Shopwithcateg } from "./Pages/PagewithCategory/SearchPageWithcateg";
import { Shoppage } from "./Pages/Shop/Shoppage";
import { Register } from "./Pages/Register/Register";
import { ProfileUser } from "./Pages/UserProfile/ProfileUser";
import { ServiceProfile } from "./Pages/ServicerProfile/ServiceProfile";
import { ShopDetail } from "./Pages/ShopOwner/ShopDetail";
import { Favourate } from "./Pages/UserProfile/Favourate";

function App() {
  const breakpoints = createBreakpoints({
    sm: "30em" /* 480px */,
    md: "48em" /* 768px */,
    lg: "62em" /* 992px */,
    xl: "80em" /*1280px 1517 */,
    "2xl": "96em" /* 1536px */,
  });
  const theme = extendTheme({ breakpoints });
  return (
    <Box overflowX={"hidden"} background="#5b4444">
      <ChakraProvider theme={theme}>
        <Container maxWidth="1552px" centerContent overflowX={"hidden"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-shop" element={<Searchshop />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/Shop-Catogery-Location" element={<ShopwithCatLoc />} />
            <Route path="/Shop-category" element={<Shopwithcateg />} />
            <Route path="/Shop-Page" element={<Shoppage />} />


            {/* user */}
            
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile-user" element={<ProfileUser />} />
            <Route path="/profile-favourate" element={<Favourate />} />

            {/* shopowner */}

            <Route path="/profile-service-provider" element={<ServiceProfile />} />
            <Route path="/shop-detail" element={<ShopDetail />} />
            
            {/* Admin */}

          </Routes>
        </Container>
      </ChakraProvider>
    </Box>
  );
}

export default App;
