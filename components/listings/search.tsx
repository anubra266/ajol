import { Button, ButtonProps } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { GridItem, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Search = () => {
  return (
    <SimpleGrid columns={4} mt={4} spacing={2}>
      <GridItem colSpan={2}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" h="full">
            <Icon as={FaSearch} color="blackAlpha.300" />
          </InputLeftElement>
          <Input
            shadow="base"
            rounded="sm"
            variant="filled"
            placeholder="Search job title or keyword"
            size="lg"
            fontSize="xs"
          />
        </InputGroup>
      </GridItem>
      <GridItem colSpan={1}>
        <Button
          leftIcon={<Icon as={FiMapPin} color="brand.300" />}
          {...butStyles}
        >
          City
        </Button>
      </GridItem>
      <GridItem colSpan={1}>
        <Button
          leftIcon={<Icon as={FaFilter} color="brand.300" />}
          {...butStyles}
        >
          Filters
        </Button>
      </GridItem>
    </SimpleGrid>
  );
};

export default Search;

const butStyles: ButtonProps = {
  size: "lg",
  w: "full",
  color: "blackAlpha.800",
  rounded: "sm",
  shadow: "md",
  borderWidth: "1px",
  borderColor: "gray.200",
  fontSize: "md",
  fontWeight: "md",
  _focus: { border: "inherit" },
  bg: "white",
};
