import { Flex } from "@chakra-ui/layout";
import Listings from "components/listings";
import Head from "next/head";

export default function Home() {
  return (
    <Flex boxSize="full">
      <Head>
        <title>Ajol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Listings />
    </Flex>
  );
}
