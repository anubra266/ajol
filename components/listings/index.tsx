import { Flex } from "@chakra-ui/layout";
import React from "react";
import Header from "./header";
import Search from "./search";

const Listings = () => {
  return (
    <Flex w={["40%"]} p={5} direction="column">
      <Header />
      <Search />
    </Flex>
  );
};

export default Listings;
