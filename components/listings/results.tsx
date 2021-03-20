import { Box, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React from "react";
import Job from "./job";

const Results = () => {
  return (
    <>
      <Box my={6} fontSize="lg" fontWeight="semibold" color="gray.400">
        <chakra.span color="gray.600">4 Results </chakra.span> in Nigeria, Lagos
      </Box>

      <Stack direction="column" spacing={4}>
        {Array.from({ length: 6 }).map((_, jid) => (
          <Job key={jid} id={jid} />
        ))}
      </Stack>
    </>
  );
};

export default Results;
