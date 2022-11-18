import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

export const ShopItemSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Box textAlign=" -webkit-center">
        <Image
          alt="sale"
          src={process.env.PUBLIC_URL + "/Image/cake.jpg"}
          h="16rem"
          w="14rem"
        />
      </Box>
      <Box textAlign=" -webkit-center">
        <Image
          alt="sale"
          src={process.env.PUBLIC_URL + "/Image/Coffee.jpg"}
          h="16rem"
          w="14rem"
        />
      </Box>
      <Box textAlign=" -webkit-center">
        <Image
          alt="sale"
          src={process.env.PUBLIC_URL + "//Image/donet.jpg"}
          h="16rem"
          w="14rem"
        />
      </Box>
      <Box textAlign=" -webkit-center">
        <Image
          alt="sale"
          src={process.env.PUBLIC_URL + "/Image/role.jpg"}
          h="16rem"
          w="14rem"
        />
      </Box>
      <Box textAlign=" -webkit-center">
        <Image
          alt="sale"
          src={process.env.PUBLIC_URL + "/Image/sandwise.jpg"}
          h="16rem"
          w="14rem"
        />
      </Box>
      <Box textAlign=" -webkit-center">
        <Image
          alt="sale"
          src={process.env.PUBLIC_URL + "//Image/sandwitch.jpg"}
          h="16rem"
          w="14rem"
        />
      </Box>
      
    </Slider>
  );
};
