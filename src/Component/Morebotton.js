import { Button, Center } from "@chakra-ui/react";
import React from "react";

export const Morebotton = ({ morebutton }) => {
  return (
    <Center>
      <Button color="Black" bg={"white"} borderRadius="2rem">
        {morebutton}
      </Button>
    </Center>
  );
};
