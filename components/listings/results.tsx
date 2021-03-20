import { Box, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React from "react";
import { jobs } from "utils/jobs";
import Job from "./job";

const Results = () => {
  return (
    <>
      <Box my={6} fontSize="lg" fontWeight="semibold" color="gray.400">
        <chakra.span color="gray.600">4 Results </chakra.span> in Nigeria, Lagos
      </Box>

      <Stack direction="column" spacing={4}>
        {jobs.map((job, jid) => (
          <Job key={jid} id={jid} job={job} />
        ))}
      </Stack>
    </>
  );
};

export default Results;
