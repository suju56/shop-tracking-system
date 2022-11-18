import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

export const InputField = ({
  label,
  type,
  inputId,
  valueInput,
  onChangeInput,
}) => {
  return (
    <>
      <Box mt="1rem">
        <Text color="white" as="b" mb=".5rem">
          {label}
        </Text>
        <Input
          id={inputId}
          type={type}
          onChange={onChangeInput}
          value={valueInput}
          size="md"
          bg="gray.300"
          mt=".5rem"
        />
      </Box>
    </>
  );
};
