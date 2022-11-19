import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiEditAlt, BiMessageSquareAdd } from "react-icons/bi";
import { AdminNavBar } from "../Admin/Comp/AdminNavBar";
import { AdminSidebar } from "../Admin/Comp/AdminSidebar";
import { Link } from "react-router-dom";

export const AdminShopMana = () => {
  return (
    <Box w="80%"> 
      <Grid templateColumns={"1fr 4fr"}>
        <Box bg="#413232" color="white" p="3rem">
          <AdminSidebar />
        </Box>

        <Box>
          <AdminNavBar />
          <Flex>
            <Box></Box>
            <Spacer />
            <Link>
              <BiMessageSquareAdd color="white" w="2rem" h="1.5rem" />
            </Link>
          </Flex>
          <Center as="b" fontSize="2xl" p="1rem" color="white">
            Shop List
          </Center>
           {/* gjsdjsdjsdjas */}
          <Grid
            templateColumns={"2fr 2fr 4fr 1fr"}
            bg="#4f4141"
            p={"2rem"}
            color="white"
            borderRadius={"2rem"}
            as="b"
            m="0 0 3rem 1rem"
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
            <Center>
              <Link to="#">
                <BiEditAlt size={20} />
              </Link>

              <Link to="#">
                <RiDeleteBin2Fill size={20} />
              </Link>
            </Center>
          </Grid>
          {/* jhxjsbjsh? */}
           {/* gjsdjsdjsdjas */}
          <Grid
            templateColumns={"2fr 2fr 4fr 1fr"}
            bg="#4f4141"
            p={"2rem"}
            color="white"
            borderRadius={"2rem"}
            as="b"
            m="0 0 3rem 1rem"
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
            <Center>
              <Link to="#">
                <BiEditAlt size={20} />
              </Link>

              <Link to="#">
                <RiDeleteBin2Fill size={20} />
              </Link>
            </Center>
          </Grid>
          {/* jhxjsbjsh? */}
           {/* gjsdjsdjsdjas */}
          <Grid
            templateColumns={"2fr 2fr 4fr 1fr"}
            bg="#4f4141"
            p={"2rem"}
            color="white"
            borderRadius={"2rem"}
            as="b"
            m="0 0 3rem 1rem"
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
            <Center>
              <Link to="#">
                <BiEditAlt size={20} />
              </Link>

              <Link to="#">
                <RiDeleteBin2Fill size={20} />
              </Link>
            </Center>
          </Grid>
          {/* jhxjsbjsh? */}
           {/* gjsdjsdjsdjas */}
          <Grid
            templateColumns={"2fr 2fr 4fr 1fr"}
            bg="#4f4141"
            p={"2rem"}
            color="white"
            borderRadius={"2rem"}
            as="b"
            m="0 0 3rem 1rem"
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
            <Center>
              <Link to="#">
                <BiEditAlt size={20} />
              </Link>

              <Link to="#">
                <RiDeleteBin2Fill size={20} />
              </Link>
            </Center>
          </Grid>
          {/* jhxjsbjsh? */}
           {/* gjsdjsdjsdjas */}
          <Grid
            templateColumns={"2fr 2fr 4fr 1fr"}
            bg="#4f4141"
            p={"2rem"}
            color="white"
            borderRadius={"2rem"}
            as="b"
            m="0 0 3rem 1rem"
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
            <Center>
              <Link to="#">
                <BiEditAlt size={20} />
              </Link>

              <Link to="#">
                <RiDeleteBin2Fill size={20} />
              </Link>
            </Center>
          </Grid>
          {/* jhxjsbjsh? */}
           {/* gjsdjsdjsdjas */}
          <Grid
            templateColumns={"2fr 2fr 4fr 1fr"}
            bg="#4f4141"
            p={"2rem"}
            color="white"
            borderRadius={"2rem"}
            as="b"
            m="0 0 3rem 1rem"
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
            <Center>
              <Link to="#">
                <BiEditAlt size={20} />
              </Link>

              <Link to="#">
                <RiDeleteBin2Fill size={20} />
              </Link>
            </Center>
          </Grid>
          {/* jhxjsbjsh? */}
           {/* gjsdjsdjsdjas */}
          <Grid
            templateColumns={"2fr 2fr 4fr 1fr"}
            bg="#4f4141"
            p={"2rem"}
            color="white"
            borderRadius={"2rem"}
            as="b"
            m="0 0 3rem 1rem"
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
            <Center>
              <Link to="#">
                <BiEditAlt size={20} />
              </Link>

              <Link to="#">
                <RiDeleteBin2Fill size={20} />
              </Link>
            </Center>
          </Grid>
          {/* jhxjsbjsh? */}
           {/* gjsdjsdjsdjas */}
          <Grid
            templateColumns={"2fr 2fr 4fr 1fr"}
            bg="#4f4141"
            p={"2rem"}
            color="white"
            borderRadius={"2rem"}
            as="b"
            m="0 0 3rem 1rem"
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
            <Center>
              <Link to="#">
                <BiEditAlt size={20} />
              </Link>

              <Link to="#">
                <RiDeleteBin2Fill size={20} />
              </Link>
            </Center>
          </Grid>
          {/* jhxjsbjsh? */}
        </Box>
      </Grid>
    </Box>
  );
};
