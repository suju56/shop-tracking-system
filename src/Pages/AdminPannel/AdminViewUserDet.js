import { Box, Center, Grid, Image, Input } from "@chakra-ui/react";
import React from "react";
import { InputField } from "../../Component/InputField";
import { AdminNavBar } from "../Admin/Comp/AdminNavBar";
import { AdminSidebar } from "../Admin/Comp/AdminSidebar";

export const AdminViewUserDet = () => {
  return (
    <Box w="80%">
      <Grid templateColumns={"1fr 4fr"}>
        <Box bg="#413232" color="white" p="3rem">
          <AdminSidebar />
        </Box>

        <Box>
          <AdminNavBar />

          <Box>
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
            <Box p="0 16rem 5rem 16rem" m="2rem">
              <Center bg="#bec7d0" h="3rem" borderRadius="2rem" w="24rem">
                Kalasha Bhatta
              </Center>
              <Center
                bg="#bec7d0"
                h="3rem"
                borderRadius="2rem"
                mt="1rem"
                w="24rem"
              >
                Kathmandu, Balaju, Balajuheight
              </Center>
              <Center
                bg="#bec7d0"
                h="3rem"
                borderRadius="2rem"
                mt="1rem"
                w="24rem"
              >
                9876543210
              </Center>
              <Center
                bg="#bec7d0"
                h="3rem"
                borderRadius="2rem"
                mt="1rem"
                w="24rem"
              >
                kala@gmail.com
              </Center>

              {/* <InputField label="Full Name" type="text" inputId="full_name" />
              <InputField label="Address" type="address" inputId="address" />
              <InputField label="Phone Number" type="number" inputId="phone" />
              <InputField label="Email" type="email" inputId="email" /> */}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
