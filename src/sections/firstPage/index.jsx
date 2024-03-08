import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import IndexPageButton from "../../components/Button/IndexPageButton";
import Header from "../../components/Header";

export default function FirstPage() {
  return (
    <Box
      className="bg-theme-secondary"
      h={{ base: "auto", sm: "100vh" }}
      w="100%"
    >
      <Header />
      <Flex
        position="relative"
        h="full"
        direction={{ base: "column", sm: "row" }}
        alignItems={{ base: "stretch", sm: "center" }}
        mx={{ base: 0, sm: 12 }}
      >
        <Box w={{ base: "full", sm: "50%" }}>
          <Box
            textAlign={{ base: "center", sm: "left" }}
            marginTop={{ base: 12, sm: 0 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "4xl", sm: "7xl" }}
              fontWeight="bold"
              mt={{ base: 12, sm: 0 }}
            >
              Create <br className="sm:hidden" /> Engaging
            </Heading>
          </Box>
          <Box
            textAlign={{ base: "center", sm: "left" }}
            mx={{ base: 5, sm: 0 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "4xl", sm: "7xl" }}
              fontWeight="bold"
            >
              Landing Pages
            </Heading>
            <Text fontSize={{ base: "sm", sm: "xl" }} my={{ base: 4, sm: 12 }}>
              Build beautiful landing pages in record time with Anima's Landing
              Page UI kit for Figma. No code required!
            </Text>
          </Box>

          <Flex
            direction={{ base: "column", sm: "row" }}
            alignItems="center"
            gap={{ base: 5, sm: 10 }}
          >
            <IndexPageButton wording={"Get Started"} colorScheme={"teal"}>
              <Icon icon="octicon:rocket-24" className="h-5 w-5 mr-2" />
            </IndexPageButton>
            <IndexPageButton color="#35AD99" wording={"How it works"} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
