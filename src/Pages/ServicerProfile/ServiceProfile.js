import { Box, Center, Grid, GridItem, Image, Input } from "@chakra-ui/react";
import React from "react";
import { InputField } from "../../Component/InputField";
import { NavBar } from "../UserProfile/NavBar";
import { ServicerSidebar } from "./ServicerSidebar";

export const ServiceProfile = () => {
  return (
    <Box>
      <Grid templateColumns={"1fr 4fr"}>
        <Box bg="#413232" color="white" p="3rem">
          <ServicerSidebar />
        </Box>
        <Box>
          <NavBar />
          <Center>
            <Input
              accept="image/png, image/jpeg"
              id="upfile"
              display={"none"}
              type="file"
              // onChange={handleUpload}
            />
            <Image
              src={process.env.PUBLIC_URL + "/Image/LogIn.png"}
              w="11rem"
              height="11rem"
              borderRadius="100%"
              objectFit="cover"
              cursor="pointer"
            />
          </Center>
          <Grid templateColumns={"1fr 1fr"}>
            <GridItem p="2rem 4rem 4rem 4rem">
              <InputField label="Full Name" type="text" inputId="full_name" />
              <InputField label="Address" type="address" inputId="address" />
              <InputField label="Phone Number" type="number" inputId="phone" />
              <InputField label="Email" type="email" inputId="email" />
              <InputField label="City" type="text" inputId="City" />
              <InputField label="Area" type="text" inputId="area" />
              <InputField label="Street" type="text" inputId="street" />
            </GridItem>
            <GridItem p="2rem 0 4rem 0">
              <Center color={"white"} as="b">
                Near by Famous Place
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
