import { Badge, Flex, Stack, Text } from "@chakra-ui/layout";
import { FaHeart, FaStar } from "react-icons/fa";
import { parseSalary } from "utils/parse-cost";
import { parseMatch } from "utils/parse-match";
import { ButtonProps, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";

const JobMarker = (props: any) => {
  const { job, expand, onClick } = props;
  return expand ? (
    <Flex
      zIndex={100}
      cursor="pointer"
      w="max-content"
      pos="absolute" transform="translate(-50%, -50%)"
      shadow="sm"
      rounded="md"
      borderWidth="1px"
      borderColor="blackAlpha.100"
      bg="white"
      minH="120"
      alignItems="center"
      transition="all .4s ease-in-out"
      _hover={{
        shadow: "lg",
      }}
    >
      <Stack spacing={4} direction="row" px={4} w="full" alignItems="center">
        <Stack>
          <IconButton
            aria-label="Job"
            {...logoStyles}
            color={job.icon.color}
            icon={<Icon boxSize="60%" as={job.icon.name} />}
          />
          {job.match && (
            <Badge
              colorScheme={parseMatch(job.match)}
              p={1}
              variant="subtle"
              layerStyle="job-badge"
            >
              100/{job.match}
            </Badge>
          )}
        </Stack>
        <Stack spacing={2} w="full" fontSize="sm" fontWeight="semibold">
          <Stack direction="row">
            <Text color="gray.500">{job.company}</Text>
            {job.match >= 85 && (
              <Badge
                colorScheme="orange"
                variant="subtle"
                layerStyle="job-badge"
                color="orange.400"
                p={1}
              >
                <Icon as={FaStar} /> Perfect Job
              </Badge>
            )}
            {job.new && (
              <Badge
                colorScheme="purple"
                variant="subtle"
                layerStyle="job-badge"
                color="purple.500"
                p={1}
              >
                <Icon as={FaHeart} /> New
              </Badge>
            )}
          </Stack>
          <Stack direction="row">
            <Text color="gray.700">{job.position}</Text>
          </Stack>
          <Stack direction="row">
            <Text color="brand.300">{parseSalary(job.salary)}</Text>
            <Text color="gray.400">PLN</Text>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  ) : (
    <IconButton
      onClick={onClick}
      zIndex={10}
      aria-label="Job"
      color={job.icon.color}
      icon={<Icon boxSize="60%" as={job.icon.name} />}
      bg="white"
      rounded="md"
      shadow="md"
      size="lg"
    />
  );
};

export default JobMarker;
const logoStyles: ButtonProps = {
  bg: "white",
  rounded: "md",
  shadow: "md",
  size: "lg",
};
