import { Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const ShopList = () => {
  return (
    <Box m="5rem 0">
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/cafe and Resturent.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Bakary Item : Cake, Brouni, Dunote, Crosan, Bread </Text>
              <Text>Drink Type : Coffee, Cold Drinks, Milk Tea, Black Tea</Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/fast.webp"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Surya fast Food Resturent</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text>
                {" "}
                Bakary Item : Hamburger. Cheeseburger. Sandwich. Milk shake.
                Muffin. Burrito. Biscuit, Cookie, Taco.
              </Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/nepali.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Food Item : Momo, Dal Bhat, Thukpa, Chatamari, Dheedo, Aloo Tama </Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/cafe and Resturent.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text>
                Bakary Item : Cake, Brouni, Dunote, Crosan, Bread Drink Type :
                Coffee, Cold Drinks, Milk Tea, Black Tea
              </Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/cafe and Resturent.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Bakary Item : Cake, Brouni, Dunote, Crosan, Bread </Text>
              <Text>Drink Type : Coffee, Cold Drinks, Milk Tea, Black Tea</Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/cafe and Resturent.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Bakary Item : Cake, Brouni, Dunote, Crosan, Bread </Text>
              <Text>Drink Type : Coffee, Cold Drinks, Milk Tea, Black Tea</Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/cafe and Resturent.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Bakary Item : Cake, Brouni, Dunote, Crosan, Bread </Text>
              <Text>Drink Type : Coffee, Cold Drinks, Milk Tea, Black Tea</Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/cafe and Resturent.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Bakary Item : Cake, Brouni, Dunote, Crosan, Bread </Text>
              <Text>Drink Type : Coffee, Cold Drinks, Milk Tea, Black Tea</Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/cafe and Resturent.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Bakary Item : Cake, Brouni, Dunote, Crosan, Bread </Text>
              <Text>Drink Type : Coffee, Cold Drinks, Milk Tea, Black Tea</Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/cafe and Resturent.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Sandar Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Bakary Item : Cake, Brouni, Dunote, Crosan, Bread </Text>
              <Text>Drink Type : Coffee, Cold Drinks, Milk Tea, Black Tea</Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/caf3.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Gorkha Cafa and Bakari</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text> Bakary Item : Cake, Brouni, Dunote, Crosan, Bread </Text>
              <Text>Drink Type : Coffee, Cold Drinks, Milk Tea, Black Tea</Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
      <Link to="/Shop-Page">
        <Grid
          templateColumns={"1fr 1fr 2fr"}
          bg="#4f4141"
          p={"2rem"}
          color="white"
          borderRadius={"2rem"}
          as="b"
          mb="3rem"
        >
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/caf2.jpg"}
              h="9rem"
              w="9rem"
              borderRadius={"5rem"}
            />
          </Center>
          <GridItem textAlign="center">
            <Text mt=".5rem">Shrestha Resturent</Text>
            <Text mt=".5rem">Balajuhight, Balaju</Text>
            <Text mt=".5rem">Open at : 6am</Text>
            <Text mt=".5rem">Close at: 10pm</Text>
          </GridItem>
          <GridItem textAlign="center">
            <Text> Service provide</Text>
            <Center p=".5rem" bg="#5d5547" borderRadius="1rem" m={"1rem"}>
              <Text>
                {" "}
                Food Item : Yomari, Tongba, Samya Bhaji, Wo – Newari Pancakes,
                Choila, Thukpa, Dal Bhat, Gorkhali Lamb
              </Text>
            </Center>
          </GridItem>
        </Grid>
      </Link>
    </Box>
  );
};
