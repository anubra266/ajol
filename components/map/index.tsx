import { Box } from "@chakra-ui/layout";
import React, { useContext, useEffect, useState } from "react";
import { Map, Overlay, ZoomControl } from "pigeon-maps";

import { JobsContext } from "pages";

import JobMarker from "./job-marker";

const JobsMap = () => {
  const { job: selectedJob, jobs, setJob } = useContext(JobsContext);
  const currentJob = jobs.find((job: any) => job.id === selectedJob);

  const defaultZoom = 11;
  const [center, setCenter] = useState(jobs[0].coords);
  useEffect(() => {
    selectedJob && setCenter(currentJob.coords);
  }, [selectedJob]);

  return (
    <Box pos={[, , , "fixed"]} w="full" h="100vh">
      <Box boxSize="full">
        <Map center={center} defaultZoom={defaultZoom}>
          <ZoomControl />
          {jobs.map((job: any, jid: number) => {
            return (
              <Overlay anchor={job.coords} offset={[0, 0]}>
                <JobMarker
                  key={jid}
                  job={job}
                  expand={job.id === selectedJob}
                  onClick={() => setJob(job.id)}
                />
              </Overlay>
            );
          })}
        </Map>
      </Box>
    </Box>
  );
};

export default JobsMap;
