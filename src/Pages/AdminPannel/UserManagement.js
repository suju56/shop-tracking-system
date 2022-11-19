import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AdminNavBar } from "../Admin/Comp/AdminNavBar";
import { AdminSidebar } from "../Admin/Comp/AdminSidebar";

export const UserManagement = () => {
  return (
    <Box w={"90%"}>
      <Grid templateColumns={"1fr 4fr"}>
        <Box bg="#413232" color="white" p="3rem">
          <AdminSidebar />
        </Box>

        <Box>
          <AdminNavBar />
          <Box color="white" p="3rem" as="b">
            <Center fontSize={"2xl"}>Users </Center>
            <Grid
              templateColumns="1fr 2fr 1fr 2fr 2fr 2fr 1fr"
              bg="#502b37"
              m="2rem"
              borderRadius="1rem"
              p="1rem"
            >
              <Text>User Id</Text>
              <Text>Name</Text>
              <Text> Profile</Text>
              <Text>city</Text>
              <Text>Email</Text>
              <Text>Phone No</Text>
            </Grid>

            <Grid
              templateColumns="1fr 2fr 1fr 2fr 2fr 2fr 1fr"
              bg="#502b37"
              m="2rem"
              borderRadius="1rem"
              p="1rem"
            >
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>

              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                01
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Kalasha Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kathmandu"
              </Text>
              <Text p=".5rem 0" mt="1rem">
                kala@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  {" "}
                  <RiExternalLinkFill />
                </Link>
              </Center>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
