import { Box, Center, Grid, Image, Input } from "@chakra-ui/react";
import React from "react";
import { InputField } from "../../Component/InputField";
import { Sidebar } from "../../Component/Sidebar";
import { NavBar } from "./NavBar";

export const ProfileUser = () => {
  return (
    <Box>
      <Grid templateColumns={"1fr 4fr"}>
        <Box bg="#413232" color="white" p="3rem">
          <Sidebar />
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
          <Box p="0 16rem">
            <InputField label="Full Name" type="text" inputId="full_name" />
            <InputField label="Address" type="address" inputId="address" />
            <InputField label="Phone Number" type="number" inputId="phone" />
            <InputField label="Email" type="email" inputId="email" />
            <InputField label="Password" type="password" inputId="password" />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
