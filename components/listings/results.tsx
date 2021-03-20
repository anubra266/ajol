import { Box, Stack } from "@chakra-ui/layout";
import { useRadioGroup } from "@chakra-ui/radio";
import { JobsContext } from "pages";
import React, { useContext } from "react";
import Job from "./job";

const Results = () => {
  const { jobs, job, setJob } = useContext(JobsContext);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "job",
    onChange: setJob,
    value: job,
  });
  const group = getRootProps();

  return (
    <>
      <Box my={6} fontSize="lg" fontWeight="semibold" color="gray.600">
        Top Jobs
        {/* 4 Results <chakra.span color="gray.400">in Nigeria, Lagos</chakra.span> */}
      </Box>

      <Stack direction="column" spacing={4} {...group}>
        {jobs.map((job: any) => {
          const radio = getRadioProps({ value: job.id });
          return <Job key={job.id} job={job} {...radio} />;
        })}
      </Stack>
    </>
  );
};

export default Results;
