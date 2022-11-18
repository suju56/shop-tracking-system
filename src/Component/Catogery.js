import { Box, Grid, Text, Link, Center } from "@chakra-ui/react";
import React from "react";
import { BsFilm } from "react-icons/bs";

export const Catogery = () => {
  return (
    <Box m="5rem 0">
      <Center mb="2rem" fontSize={"2xl"} color={"white"} as="b">
        {" "}
        Shop Catogery
      </Center>
      <Grid templateColumns="repeat(4, 1fr)" gap="1rem" mb="5rem">
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
              <BsFilm size={20} />
            </Box>

            <Text p=".5rem" fontSize="1rem" as="b">
              Cinema and Film
            </Text>
          </Center>
        </Link>
      </Grid>
    </Box>
  );
};
