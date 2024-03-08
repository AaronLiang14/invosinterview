import { Box, Card, CardBody, Flex, Grid, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function Features() {
  const features = [
    {
      icon: "solar:ufo-bold-duotone",
      describe: "Fast building",
    },
    {
      icon: "fluent:pen-sparkle-16-regular",
      describe: "Easy to edit",
    },
    {
      icon: "fluent:square-hint-48-regular",
      describe: "Responsiveness",
    },
    {
      icon: "solar:box-linear",
      describe: "No code needed",
    },
  ];

  return (
    <Flex
      bg="#F8F9FF"
      position="relative"
      zIndex={30}
      h={{ base: "auto", sm: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex direction={{ base: "column", sm: "row" }} alignItems="center">
        <Box mx={12}>
          <Text
            fontWeight="bold"
            my={{ base: 8, sm: 0 }}
            fontSize={"4xl"}
            textAlign={{ base: "center", sm: "left" }}
          >
            Our features
          </Text>
          <Text
            fontSize="xl"
            textAlign={{ base: "center", sm: "left" }}
            my={{ base: 6, sm: 2 }}
          >
            Few good reasons why you should use Anima Landing Page Ui Kit make
            your own pages.
          </Text>
          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} gap={5}>
            {features.map((item) => (
              <Card borderRadius="3xl" key={item.describe}>
                <CardBody>
                  <Flex alignItems="center" gap={4}>
                    <Icon
                      icon={item.icon}
                      className="w-12 h-12 bg-[#E5F4F2] text-[#86CBBF] rounded-xl p-2"
                    />
                    <Text fontSize="2xl">{item.describe}</Text>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          h="full"
          my={{ base: 40, sm: 0 }}
          w={{ base: "full", sm: "50%" }}
          order={{ base: 0, sm: -1 }}
        >
          <Box
            position="relative"
            flex
            justifyCenter
            className=" bg-theme-secondary"
            rounded="full"
            w={{ base: "80", sm: "96" }}
            h={{ base: "80", sm: "96" }}
          >
            {" "}
            <Grid
              templateColumns="repeat(2, 1fr)"
              bg="#c16f66"
              w="24"
              h="24"
              position="absolute"
              left={{ base: -12, sm: -24 }}
              top={{ base: -12, sm: 8 }}
            >
              {" "}
              <Box w="12" h="12" bg="#F8F9FF" roundedBottomRight="full"></Box>
              <Box w="12" h="12" bg="#F8F9FF" roundedBottomLeft="full"></Box>
              <Box w="12" h="12" bg="#F8F9FF" roundedTopRight="full"></Box>
              <Box w="12" h="12" bg="#F8F9FF" roundedTopLeft="full"></Box>
            </Grid>
            <Grid
              templateColumns="repeat(2, 1fr)"
              bg="#FFF"
              w="12"
              h="12"
              position="absolute"
              bottom="32"
              right={{ base: 1, sm: 4 }}
            >
              {" "}
              <Box
                w="6"
                h="6"
                className="bg-theme-secondary"
                roundedBottomRight="full"
              ></Box>
              <Box
                w="6"
                h="6"
                className="bg-theme-secondary"
                roundedBottomLeft="full"
              ></Box>
              <Box
                w="6"
                h="6"
                className="bg-theme-secondary"
                roundedTopRight="full"
              ></Box>
              <Box
                w="6"
                h="6"
                className="bg-theme-secondary"
                roundedTopLeft="full"
              ></Box>
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
