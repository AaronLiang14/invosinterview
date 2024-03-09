import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import IndexPageButton from "../../components/Button/IndexPageButton";
import Header from "../../components/Header";
import Star from "../../components/icon/star";
import Iphone from "../../components/iphone";

export default function FirstPage() {
  return (
    <Box bg="#F8D57E" h={{ base: "auto", sm: "100vh" }} w="100%">
      <Header />
      <Flex
        position="relative"
        h="full"
        direction={{ base: "column", sm: "row" }}
        alignItems={{ base: "stretch", sm: "center" }}
        mx={{ base: 0, sm: 12 }}
      >
        <Box w={{ base: "full", sm: "50%" }} mb={{ base: 32, sm: 0 }}>
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
              <Icon icon="octicon:rocket-24" className="mr-2 h-5 w-5" />
            </IndexPageButton>
            <IndexPageButton color="#35AD99" wording={"How it works"} />
          </Flex>
        </Box>

        <Flex
          mx={5}
          h={{ base: 72, sm: 96 }}
          justifyContent="center"
          roundedTop={"150px"}
          bg="#FFF"
          pos={{ sm: "absolute" }}
          bottom={{ sm: 0 }}
          right={{ sm: 12 }}
          w={{ base: "11/12", sm: "500px" }}
        >
          <Box position="absolute" left={0} bottom={{ base: 80, sm: "450px" }}>
            <Star size={12} bgColor="#FFF" coverColor="#F8D57E" />
          </Box>

          <Box position="absolute" right={20} bottom={{ base: 40, sm: 60 }}>
            <Star size={12} bgColor="#B74427" coverColor="#FFF" />
          </Box>
        </Flex>
        <Box
          pos="absolute"
          bottom={{ base: "-48", sm: "-14" }}
          left={{ base: "12", sm: "auto" }}
          right={{ sm: "44" }}
        >
          <Iphone height="96" width="72" />
        </Box>
      </Flex>
    </Box>
  );
}
