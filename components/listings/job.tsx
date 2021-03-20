import { ButtonProps, IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Badge, Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { SiMicrosoftedge } from "react-icons/si";

const Job = (props: any) => {
  const { jid } = props;
  return (
    <Flex
      w="full"
      shadow="sm"
      rounded="md"
      borderWidth="1px"
      borderColor="blackAlpha.100"
      bg="white"
      minH="120"
      alignItems="center"
    >
      <Stack spacing={4} direction="row" px={4} w="full" alignItems="center">
        <Stack>
          <IconButton
            aria-label="Job"
            {...logoStyles}
            color="blue.400"
            icon={<Icon boxSize="60%" as={SiMicrosoftedge} />}
          />
          <Badge
            colorScheme="purple"
            p={1}
            variant="subtle"
            layerStyle="job-badge"
          >
            100/85
          </Badge>
        </Stack>
        <Stack spacing={2} w="full">
          <Stack direction="row">
            <Text fontSize="sm" fontWeight="semibold" color="gray.500">
              Digital Ocean
            </Text>
            <Badge
              colorScheme="orange"
              variant="subtle"
              layerStyle="job-badge"
              color="orange.400"
              p={1}
            >
              <Icon as={FaStar} /> Perfect Job
            </Badge>
            <Badge
              colorScheme="purple"
              variant="subtle"
              layerStyle="job-badge"
              color="purple.500"
              p={1}
            >
              <Icon as={FaHeart} /> New
            </Badge>
          </Stack>
          <Stack direction="row" fontSize="sm" fontWeight="semibold">
            <Text color="gray.700">Sr. Back-End Developer</Text>
            <Spacer />
            <Text color="brand.300">8.8 - 12.7k </Text>
            <Text color="gray.400">PLN</Text>
          </Stack>
          <Text fontSize="xs" fontWeight="semibold" color="gray.400">
            Lagos, Ayobo
          </Text>
          <Stack
            direction="row"
            fontSize="sm"
            fontWeight="semibold"
            alignItems="baseline"
          >
            <Badge
              colorScheme="gray"
              variant="subtle"
              layerStyle="job-badge"
              color="gray.500"
              px={2}
              py={1}
            >
              C++
            </Badge>{" "}
            <Badge
              colorScheme="gray"
              variant="subtle"
              layerStyle="job-badge"
              color="gray.500"
              px={2}
              py={1}
            >
              ASP.NET
            </Badge>{" "}
            <Badge
              colorScheme="gray"
              variant="subtle"
              layerStyle="job-badge"
              color="gray.500"
              px={2}
              py={1}
            >
              Razor
            </Badge>
            <Spacer />
            <Text color="gray.400" fontSize="xx-small">
              od. 29.12.2019
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Job;

const logoStyles: ButtonProps = {
  bg: "white",
  rounded: "md",
  shadow: "md",
  size: "lg",
};
