import { ButtonGroup, IconButton, IconButtonProps } from "@chakra-ui/button";
import { Flex, LinkBox, LinkOverlay, Spacer, Text } from "@chakra-ui/layout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

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
        <SocialIcon
          icon={<FaTwitter />}
          aria-label="Twitter"
          href="https://twitter.com/anubra266"
        />
        <SocialIcon
          icon={<FaGithub />}
          aria-label="Github"
          href="https://github.com/anubra266"
        />
        <SocialIcon
          icon={<FaLinkedin />}
          aria-label="Linkedin"
          href="https://linkedin.com/in/anubra266"
        />
        <SocialIcon
          icon={<FiDribbble />}
          aria-label="Dribbble"
          href="https://dribbble.com/shots/9709391-Find-Job-Web-App-Dashboard-UI"
        />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;

const SocialIcon = (props: IconButtonProps | any) => {
  const { href, ...rest } = props;
  return (
    <LinkBox>
      <LinkOverlay href={href}>
        <IconButton
          {...rest}
          aria-label="twitter"
          variant="solid"
          isRound
          bg="brand.300"
          color="white"
          _hover={{
            bg: "brand.200",
          }}
        />
      </LinkOverlay>
    </LinkBox>
  );
};
