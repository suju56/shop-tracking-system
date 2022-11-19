import { Box, Button, Center, Grid } from "@chakra-ui/react";
import { GridItem, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Component/Footer";
import { InputField } from "../../Component/InputField";
import { Nav } from "../../Component/Nav";

export const Register = () => {
  return (
    <Box w="80%">
      <Nav />
      <Center color={"white"} fontSize={"3xl"} as="b" p={"2rem"}>
        Sign Up
      </Center>
      <Box bg="#453737" borderRadius={"3rem"} m={"3rem"}>
        <Grid templateColumns="1fr 1fr">
          <Center>
            <Image
              alt="sale"
              src={process.env.PUBLIC_URL + "/Image/copyright.png"}
              p="3rem"
            />
          </Center>
          <GridItem p={"2rem"}>
            <Box>
              <Text color="white" as="b" mb=".5rem">
                Log In as
              </Text>
              <Select placeholder="Choose to log in" mt={".5rem"} bg="gray.300">
                <option value="option1">User</option>
                <option value="option2">Shop Owner</option>
              </Select>
            </Box>
            <InputField label="Full Name" type="text" inputId="full_name" />
            <InputField label="Address" type="address" inputId="address" />
            <InputField label="Phone Number" type="number" inputId="phone" />
            <InputField label="Email" type="email" inputId="email" />
            <InputField label="Password" type="password" inputId="password" />
          </GridItem>
        </Grid>
        <Center p="2rem">
          <Link to="/log-in"><Button bg={"#3a3135"} color="white" w="20rem" borderRadius={"2rem"}>
            Already Have Account
          </Button></Link>
          <Link to="/log-in"><Button
            bg={"#3a3135"}
            color="white"
            w="20rem"
            borderRadius={"2rem"}
            ml="1rem"
          >
            Sign Up
          </Button></Link>
          
        </Center>
      </Box>
      <Footer />
    </Box>
  );
};
