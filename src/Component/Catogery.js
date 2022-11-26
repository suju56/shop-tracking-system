import { Box, Grid, Text, Link, Center } from "@chakra-ui/react";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import { BiBookOpen, BiGift } from "react-icons/bi";
import { BsCart4, BsFilm, BsHouseDoor } from "react-icons/bs";
import { FaBiking, FaShoppingBasket, FaStore } from "react-icons/fa";
import { GiCarWheel, GiClothesline, GiDoubleNecklace, GiLoincloth, GiRedCarpet, GiShop, GiSpartan } from "react-icons/gi";
import { GrCafeteria } from "react-icons/gr";
import { FcShop } from "react-icons/fc";
import { MdHardware, MdSmartToy } from "react-icons/md";

export const Catogery = () => {
  return (
    <Box m="5rem 0">
      <Center mb="2rem" fontSize={"2xl"} color={"white"} as="b">
        Shop Catogery
      </Center>
      <Grid templateColumns="repeat(4, 1fr)" gap="3rem" mb="5rem">
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <BsFilm size={20} />
            </Box>
            <Text p=".5rem" fontSize="1rem" as="b">
              Cinema and Film
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <AiFillCar size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Car Shoroom
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <FaStore size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Depatment Store
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <FaBiking size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
             Vehicle Shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <GrCafeteria size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Cafa and Resturent
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <MdSmartToy size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Toy Shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <BsHouseDoor size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Driving Center
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <GiShop size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Tattoo Shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <BiGift size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Gift Shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <GiLoincloth size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Buthic
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <GiClothesline size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Cloth Shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <BsCart4 size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Shopping Mall
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <GiSpartan size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Beauty Parlor
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <GiDoubleNecklace size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
             Jwelory Shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <FaShoppingBasket size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Mart
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <BiBookOpen size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Stationary
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <GiCarWheel size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
             Mechanic Shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <MdHardware size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
             Hardware shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <GiRedCarpet size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Carpet Shop
            </Text>
          </Center>
        </Link>
        <Link to="/home" p=".5rem" bg="white" borderRadius="3rem">
          <Center>
            <Box p=".5rem">
              <FcShop size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Plastic Shop
            </Text>
          </Center>
        </Link>
      </Grid>
    </Box>
  );
};
