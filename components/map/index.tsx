import { Box } from "@chakra-ui/layout";
import React, { useContext, useState } from "react";
import GoogleMapReact from "google-map-react";
import { JobsContext } from "pages";

import JobMarker from "./job-marker";

const Map = () => {
  const { job: selctedJob, jobs } = useContext(JobsContext);
  const center = {
    lat: jobs[0].coords[0],
    lng: jobs[0].coords[1],
  };
  const zoom = 11;
  const [loaded, setLoaded] = useState(false);
  const handleApiLoaded = (map: any, maps: any) => {
    map && setLoaded(true);
  };
  return (
    <Box pos="fixed" w="full" h="100vh">
      <Box boxSize="full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {loaded &&
            jobs.map((job: any, jid: number) => {
              const [lat, lng] = job.coords;
              return (
                <JobMarker
                  lat={lat}
                  lng={lng}
                  key={jid}
                  job={job}
                  expand={job.id === selctedJob}
                />
              );
            })}
        </GoogleMapReact>
      </Box>
    </Box>
  );
};

export default Map;
