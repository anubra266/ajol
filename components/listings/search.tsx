import { Button, ButtonProps } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { GridItem, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Search = () => {
  return (
    <SimpleGrid columns={24} mt={4} spacing={4}>
      <GridItem colSpan={12}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" h="full">
            <Icon as={FaSearch} color="blackAlpha.300" />
          </InputLeftElement>
          <Input
            shadow="base"
            rounded="md"
            variant="filled"
            placeholder="Search job title or keyword"
            size="md"
            fontSize="xs"
            focusBorderColor="brand.300"
          />
        </InputGroup>
      </GridItem>
      <GridItem colSpan={6}>
        <Button
          leftIcon={<Icon as={SiGooglemaps} color="brand.300" />}
          {...butStyles}
        >
          City
        </Button>
      </GridItem>
      <GridItem colSpan={6}>
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
  size: "md",
  w: "full",
  color: "blackAlpha.800",
  bg: "white",
  rounded: "md",
  shadow: "md",
  borderWidth: "1px",
  borderColor: "blackAlpha.100",
  fontSize: "md",
  justifyContent: "left",
  fontWeight: "semibold",
  _focus: { border: "inherit" },
  _hover: { bg: "blackAlpha.200" },
};
