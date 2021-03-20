import { ButtonGroup, IconButton, IconButtonProps } from "@chakra-ui/button";
import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <Flex
      w="full"
      borderBottomWidth="1px"
      borderBottomColor="blackAlpha.200"
      pb={4}
    >
      <Text fontSize="2xl" color="brand.300" fontWeight="bold">
        Ajol
      </Text>
      <Spacer />
      <ButtonGroup size="sm" alignSelf="center">
        <SocialIcon icon={<FaTwitter />} aria-label="Twitter" />
        <SocialIcon icon={<FaGithub />} aria-label="Github" />
        <SocialIcon icon={<FaLinkedin />} aria-label="Linkedin" />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;

const SocialIcon = (props: IconButtonProps) => (
  <IconButton
    {...props}
    aria-label="twitter"
    variant="solid"
    isRound
    bg="brand.300"
    color="white"
    _hover={{
      bg: "brand.200",
    }}
  />
);
