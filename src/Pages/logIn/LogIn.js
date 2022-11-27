import { Box, Button, Center, Grid } from "@chakra-ui/react";
import { GridItem, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Component/Footer";
import { InputField } from "../../Component/InputField";
import { Nav } from "../../Component/Nav";

export const LogIn = () => {
  return (
    <Box w="82%" p={"2rem"}>
      <Nav />
      <Center color={"white"} fontSize={"3xl"} as="b" p={"2rem"}>
        {/* // reminder */}
        <Link to="/admin-profile"> Sign In </Link>
        {/* // reminder */}
      </Center>
      <Box bg="#453737" borderRadius={"3rem"} m={"3rem"}>
        <Grid templateColumns="1fr 1fr">
          <Center>
            {/* // reminder */}
            <Link to="/profile-service-provider">
              <Image
                alt="sale"
                src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                p="2rem"
                w={"25rem"}
                h={"20rem"}
              />
            </Link>
            {/* // reminder */}
          </Center>
          <GridItem p={"2rem"}>
            <Box>
              <Text color="white" as="b" mb=".5rem">
                Log In as
              </Text>
              <Select placeholder="Choose to log in" mt={".5rem"} bg="gray.300">
                <option value="option1">
                  <Link to="/profile-user">User</Link>
                </option>
                <option value="option1">
                  <Link to="/profile-service-provider">Shop Owner</Link>
                </option>
                <option value="option1">
                  <Link to="/admin-profile">Admin</Link>
                </option>
              </Select>
            </Box>
            <InputField label="Email" type="text" inputId="Email" />
            <InputField label="Password" type="Password" inputId="Password" />
          </GridItem>
        </Grid>
        <Center p="2rem">
          <Link to="/register">
            <Button
              bg={"#3a3135"}
              color="white"
              w="20rem"
              borderRadius={"2rem"}
            >
              Register
            </Button>
          </Link>
          <Link to="/profile-user">
            <Button
              bg={"#3a3135"}
              color="white"
              w="20rem"
              borderRadius={"2rem"}
              ml="1rem"
            >
              Sign In
            </Button>
          </Link>
        </Center>
      </Box>
      <Footer />
    </Box>
  );
};
