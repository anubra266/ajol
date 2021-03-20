import { Flex } from "@chakra-ui/layout";
import React from "react";
import Header from "./header";
import Results from "./results";
import Search from "./search";

const Listings = () => {
  return (
    <Flex p={5} direction="column" shadow="md" bg="white" h="full">
      <Header />
      <Search />
      <Results />
    </Flex>
  );
};

export default Listings;
