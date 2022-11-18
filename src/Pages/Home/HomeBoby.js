import { Box, Center, Grid, GridItem, Image, Input } from "@chakra-ui/react";
import React from "react";

export const HomeBoby = () => {
  return (
    <Box m="4rem 0">
      <Box p="2rem">
        <Center fontSize={"3xl"} as="b" color={"white"}> Searching Shop with </Center>
        <Center fontSize={"3xl"} as="b" color={"white"}>Shop Search </Center>
        <Center fontSize={"1xl"} color={"white"} m=".5rem">Fast Search made easy</Center>
     </Box>
      
      <Grid templateColumns="1fr 2fr 1fr">
        <GridItem p="2rem">
          <Image
            alt="sale"
            src={process.env.PUBLIC_URL + "/sale.png"}
            h="16rem"
            w="14rem"
          />
        </GridItem>
        <GridItem textAlign={["center", "center"]}>
          <Input
            placeholder="Search Shop Near Your Location"
            size="lg"
            h="17rem"
            _placeholder={{ color: "white", textAlign: "center" }}
            bg="#833a3a"
            borderRadius="17rem"
            mt="1.3rem"
            width="70%"
            borderStyle="dashed"
          />
        </GridItem>
        <GridItem p="2rem">
          <Image
            alt="shopping1"
            src={process.env.PUBLIC_URL + "/shopping1.png"}
            h="16rem"
            w="14rem"
          />
        </GridItem>
        <Box
          gridrow="2"
          gridColumn="2"
          textAlign="-webkit-center"
          mt="-7rem"
          zIndex={1}
        >
          <Image
            alt="searching"
            src={process.env.PUBLIC_URL + "/searching.png"}
            w="2rem"
          />
        </Box>
      </Grid>
    </Box>
  );
};
