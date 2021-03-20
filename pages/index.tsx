import { GridItem, SimpleGrid } from "@chakra-ui/layout";
import Listings from "components/listings";
import Map from "components/map";
import { createContext, useMemo, useState } from "react";
import { jobs } from "utils/jobs";

type JobsContext = {
  jobs: Record<string, any>;
  job: any;
  setJob: (job: any) => void;
};
export const JobsContext = createContext<JobsContext>(null);

export default function Home() {
  const [job, setJob] = useState(null);
  const contextProps = useMemo(
    () => ({
      jobs,
      job,
      setJob,
    }),
    [job, jobs]
  );
  return (
    <>
      <JobsContext.Provider value={contextProps}>
        <SimpleGrid columns={10} w="full">
          <GridItem colSpan={[10, , , 4]} zIndex={10}>
            <Listings />
          </GridItem>
          <GridItem colSpan={[10, , , 6]}>
            <Map />
          </GridItem>
        </SimpleGrid>
      </JobsContext.Provider>
    </>
  );
}
