import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "white")(props),
      bg: mode("white", "gray.800")(props),
    },
    html: {
      minH: "100%",
    },
  }),
};
