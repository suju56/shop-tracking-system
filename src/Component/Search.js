import { Box, Button, Grid, Input } from "@chakra-ui/react";
import React from "react";
import { FaSearchLocation } from "react-icons/fa";

export const Search = ({placeholderforSearch, mtforsearch}) => {
  return (
    <Box mt={mtforsearch}>
      <Grid templateColumns="1fr 2fr 1fr">
        <Box></Box>
        <Input
          placeholder={placeholderforSearch}
          _placeholder={{ color: "white", textAlign: "center" }}
          borderRadius="1rem"
          width="100%"
        />
        <Button bg=" transparent" borderRadius={"2rem"} w="22%" border="1px solid white" ml=".5rem">
          <FaSearchLocation size={40} />
        </Button>
      </Grid>
    </Box>
  );
};
