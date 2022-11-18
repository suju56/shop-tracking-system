import { BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Box, Breadcrumb } from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const BreadCrumb = () => {
  return (
    <Box p={"2rem"} color="white">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Shop Category</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Cafa and resturent</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Balajuheight</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Balaju</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
    </Box>
  );
};
