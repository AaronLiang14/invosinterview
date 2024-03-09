import { Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import IndexPageButton from "../Button/IndexPageButton";

export default function Header() {
  return (
    <Flex as="header" h={20} items="center" mx={12}>
      <Flex mr="auto" alignItems="center">
        <Icon icon="solar:tv-outline" className="mr-2 h-8 w-8" />
        <Text
          fontWeight="bold"
          fontSize={"2xl"}
          display={{ base: "none", sm: "inline" }}
        >
          Landing
        </Text>
        <Text fontSize={"2xl"} display={{ base: "none", sm: "inline" }}>
          Page
        </Text>
      </Flex>
      <Flex gap={12} alignItems="center" fontWeight="bold">
        <Text
          color="#009379"
          fontSize="xl"
          display={{ base: "none", sm: "block" }}
        >
          Contact
        </Text>

        <IndexPageButton
          color="#35AD99"
          wording={"How it works"}
          display={{ base: "none", sm: "block" }}
        />

        <IndexPageButton colorScheme={"teal"} wording={"Get Started"}>
          <Icon
            icon="octicon:rocket-24"
            className="mr-2 hidden h-5 w-5 sm:block"
          />
          <Icon icon="maki:arrow" className="mr-2 h-5 w-5 sm:hidden" />
        </IndexPageButton>
      </Flex>
    </Flex>
  );
}
