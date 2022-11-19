import { Box, Center, Flex, Grid, Image, Input } from "@chakra-ui/react";
import { Select, Spacer, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { InputField } from "../../Component/InputField";
import { Sidebar } from "../../Component/Sidebar";
import { ShopItemSlider } from "../Shop/ShopItemSlider";
import { NavBar } from "../UserProfile/NavBar";

export const ShopDetail = () => {
  return (
    <Box>
      <Grid templateColumns={"1fr 4fr"}>
        <Box bg="#413232" color="white" p="3rem">
          <Sidebar />
        </Box>
        <Box>
          <NavBar />
          <Box m={"5rem"}>
            <Center>
              <Input
                accept="image/png, image/jpeg"
                id="upfile"
                display={"none"}
                type="file"
                // onChange={handleUpload}
              />
              <Image
                alt="sale"
                src={process.env.PUBLIC_URL + "/Image/Main-Dining-Room.webp"}
                w="35rem"
                h={"25rem"}
                objectFit="cover"
                cursor="pointer"
              />
            </Center>
            <Grid templateColumns={"1fr 1fr"}>
              <Box p="0 2rem 0 0 ">
                <InputField label="Shop Name" type="text" inputId="shop_name" />
                <InputField label="Address" type="address" inputId="address" />
                <InputField
                  label="Phone Number"
                  type="number"
                  inputId="phone"
                />
                <InputField label="Email" type="email" inputId="email" />
              </Box>
              <Box p="0 0 0 2rem">
                <InputField label="City" type="text" inputId="City" />
                <InputField label="Area" type="text" inputId="area" />
                <InputField label="Street" type="text" inputId="street" />
              </Box>
            </Grid>
            <Flex>
              <InputField
                label="New Category"
                type="text"
                inputId="new-category"
              />
              <Spacer />
              <Box mt="1rem">
                <Text color="white" as="b" mb=".5rem">
                  Select Category
                </Text>
                <Select
                  placeholder="Select Category"
                  mt={".5rem"}
                  bg="gray.300"
                  w={"22rem"}
                >
                  <option value="option1">Cafa And Resturent</option>
                  <option value="option2">Hospital</option>
                  <option value="option2">Vehicle Shop</option>
                  <option value="option2">Bakery</option>
                </Select>
              </Box>
            </Flex>
            <Box p="2rem 0">
              <Center color={"white"} as="b">
                Description
              </Center>
              <Textarea
                placeholder="Description of Location"
                bg={"white"}
                h="15rem"
                borderRadius={"2rem"}
              />
            </Box>
            <Box p="2rem 0">
              <Center color={"white"} as="b">
                About Us
              </Center>
              <Textarea
                placeholder="Description of the Shop"
                bg={"white"}
                h="15rem"
                borderRadius={"2rem"}
              />
            </Box>
            <Box p="2rem 0">
              <Center color={"white"} as="b">
                Service Provide
              </Center>
              <Textarea
                placeholder="Description of the Service which shope Provide"
                bg={"white"}
                h="15rem"
                borderRadius={"2rem"}
              />
            </Box>
            <Box>
              <Center color={"white"} as="b">
                Upload Pictures of Services
              </Center>
              <Input
                accept="image/png, image/jpeg"
                id="upfile"
                display={"none"}
                type="file"
                // onChange={handleUpload}
              />
              <ShopItemSlider />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
