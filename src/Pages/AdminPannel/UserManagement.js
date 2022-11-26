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
                  src={process.env.PUBLIC_URL + "/Image/p9.jpg"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Sangha"
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
                02
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Ram Shrestha
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/p8.jpg"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Gorkha"
              </Text>
              <Text p=".5rem 0" mt="1rem">
              Ram@gmail.com
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
                03
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Sita Adhikari
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/p7.jpg"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "NarayanGhat"
              </Text>
              <Text p=".5rem 0" mt="1rem">
              Sita@gmail.com
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
                04
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Json Thapa
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/p6.jpg"}
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
              Json@gmail.com
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
                05
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Rajina Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/p5.jpg"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Kailali"
              </Text>
              <Text p=".5rem 0" mt="1rem">
              Rajina@gmail.com
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
                06
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Sumana Amgain
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/p4.jpg"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Ramachap"
              </Text>
              <Text p=".5rem 0" mt="1rem">
              Sumana@gmail.com
              </Text>
              <Text p=".5rem 0" mt="1rem">
                9876543210
              </Text>
              <Center>
                <Link to="/admin-user-detail">
                  <RiExternalLinkFill />
                </Link>
              </Center>
              {/* // data */}
              <Text p=".5rem 0" mt="1rem">
                07
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Dhurba Aapagai
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/p3.jpg"}
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
              Dhurba@gmail.com
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
                08
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Dipson Pantha
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/p2.jpg"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Gorkha"
              </Text>
              <Text p=".5rem 0" mt="1rem">
              Dipson@gmail.com
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
                09
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Shraya Joshi
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/p1.jpg"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "Chitwan"
              </Text>
              <Text p=".5rem 0" mt="1rem">
              Shraya@gmail.com
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
                10
              </Text>
              <Text p=".5rem 0" mt="1rem">
                Hari Bhatta
              </Text>
              <Text p=".5rem 0">
                <Image
                  src={process.env.PUBLIC_URL + "/Image/caf1.jpg"}
                  w="2.5rem"
                  height="2.5rem"
                  borderRadius="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Text>
              <Text p=".5rem 0" mt="1rem">
                "pokhara"
              </Text>
              <Text p=".5rem 0" mt="1rem">
              Hari@gmail.com
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
