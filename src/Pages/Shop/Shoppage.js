import { Box, Button, Center, Flex, Grid } from "@chakra-ui/react";
import { GridItem, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { BreadCrumb } from "../../Component/BreadCrump";
import { Footer } from "../../Component/Footer";
import { Nav } from "../../Component/Nav";
import { ShopMap } from "../../Component/ShopMap";
import { ShopItemSlider } from "./ShopItemSlider";

export const Shoppage = () => {
  return (
    <Box w="80%">
      <Nav />
      <BreadCrumb
        Category="Cafa And Resturent"
        City="Kathmandu"
        Area="Balauj"
        Street="Balajuhight"
      />
      <Box m="5rem" color={"white"}>
        <Center fontSize={"3xl"} as="b">
          Sandar Cafa and Bakari
        </Center>
        <Flex>
          <Box></Box>
          <Spacer />
          <Button bg={"#9f6975"} borderRadius="2rem">
            <MdFavoriteBorder />
          </Button>
        </Flex>
        <Center>
          <Image
            alt="sale"
            src={process.env.PUBLIC_URL + "/Image/Main-Dining-Room.webp"}
            w="35rem"
            h={"25rem"}
          />
        </Center>
        <Box fontSize={"3xl"} as="b" m={"3rem"}>
          <Center>Address</Center>

          <Box
            bg="#f3ebeb"
            borderRadius={"3rem"}
            color="black"
            fontSize={"1rem"}
          >
            <Grid templateColumns="repeat(3, 1fr)" p="3rem">
              <GridItem>
                <Center>
                  City :<Text>Kathmandu</Text>
                </Center>
              </GridItem>
              <GridItem>
                <Center>
                  Area :<Text>Kathmandu</Text>
                </Center>
              </GridItem>
              <GridItem>
                <Center>
                  Street :<Text>Kathmandu</Text>
                </Center>
              </GridItem>
              <Flex gridRow={"2"} gridColumn={"1/4"} mt=".5rem ">
                Description:
                <Text ml=".2rem">
                  Sliders reflect a range of values along a bar, from which
                  users may select a single value. They are ideal for adjusting
                  settings such as volume, brightness, or applying image
                  filters.
                </Text>
              </Flex>
            </Grid>
          </Box>
        </Box>
        <Box fontSize={"3xl"} as="b" m={"3rem"}>
          <Center>About Us</Center>
          <Box
            bg="#f3ebeb"
            borderRadius={"3rem"}
            color="black"
            fontSize={"1rem"}
          >
            <Text p="3rem">
              At BalajuHight, Balaju, kathmandu, we’re serving up more than 10
              years. In fact, Pizza is one of our unexpected specialties.
              Reminiscent of butcher shops back in the day, each slow-smoked,
              sizzling prime chop measures seven-fingers high. Our signature
              recipe, that we have perfected for more than four decades, is
              rubbed with a secret blend of seasonings, cured and roasted on a
              rotisserie with pecan wood for up to six hours before it’s topped
              with signature herb-garlic butter, then carved tableside.
            </Text>
          </Box>
        </Box>
        <Box fontSize={"3xl"} as="b" m={"3rem"}>
          <Center>Service Provide</Center>
          <Box
            bg="#f3ebeb"
            borderRadius={"3rem"}
            color="black"
            fontSize={"1rem"}
          >
            <Text p="3rem">
              Bakary Item : Cake, Brouni, Dunote, Crosan, Bread, Drink Type :
              Coffee, Cold Drinks, Milk Tea, Black Tea
            </Text>
          </Box>
        </Box>
      </Box>

      <Box m="5rem">
        <ShopItemSlider />
      </Box>
      <Box m="0 5rem 5rem 5rem">
        <ShopMap />
      </Box>
      <Footer />
    </Box>
  );
};
