import { ButtonProps, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import {
  Badge,
  Box,
  BoxProps,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { useRadio } from "@chakra-ui/radio";
import { FaHeart, FaStar } from "react-icons/fa";
import { useElementOnScreen } from "utils/Hooks/useElementOnScreen";
import { parseSalary } from "utils/parse-cost";
import { parseMatch } from "utils/parse-match";

const Job = (props: any) => {
  const { job } = props;

  const [ref, isPartiallyVisible, isFullyVisible] = useElementOnScreen();
  const shouldBlur = isPartiallyVisible && !isFullyVisible;

  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box
      as="label"
      transition="all .4s ease-in-out"
      ref={ref}
      opacity={shouldBlur ? 0.4 : 1}
      _hover={{
        opacity: 1,
      }}
    >
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        w="full"
        pos="relative"
        shadow="sm"
        rounded="md"
        borderWidth="1px"
        borderColor="blackAlpha.100"
        bg="white"
        minH="120"
        alignItems="center"
        transition="all .4s ease-in-out"
        _checked={{
          shadow: "md",
          _before: { ...borderStyles, roundedRight: "full" },
          _after: { ...borderStyles, right: 0, roundedLeft: "full" },
        }}
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
          <Stack spacing={2} w="full">
            <Stack direction="row">
              <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                {job.company}
              </Text>
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
            <Stack direction="row" fontSize="sm" fontWeight="semibold">
              <Text color="gray.700">{job.position}</Text>
              <Spacer />
              <Text color="brand.300">{parseSalary(job.salary)}</Text>
              <Text color="gray.400">PLN</Text>
            </Stack>
            <Text fontSize="xs" fontWeight="semibold" color="gray.400">
              {job.location}
            </Text>
            <Stack
              direction="row"
              fontSize="sm"
              fontWeight="semibold"
              alignItems="baseline"
            >
              {job.tags.map((tag: string, tid: number) => (
                <Badge
                  colorScheme="gray"
                  variant="subtle"
                  layerStyle="job-badge"
                  color="gray.500"
                  px={2}
                  py={1}
                  key={`tag-${tid}`}
                >
                  {tag}
                </Badge>
              ))}
              <Spacer />
              <Text color="gray.400" fontSize="xx-small">
                od. {job.post_date}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Job;

const logoStyles: ButtonProps = {
  bg: "white",
  rounded: "md",
  shadow: "md",
  size: "lg",
};

const borderStyles: BoxProps | any = {
  content: "''",
  pos: "absolute",
  h: "60%",
  w: "4px",
  bg: "brand.300",
};
