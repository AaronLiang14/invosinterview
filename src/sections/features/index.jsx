import { Box, Card, CardBody, Flex, Grid, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Star from "../../components/icon/star";
import Iphone from "../../components/iphone";

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
                      className="h-12 w-12 rounded-xl bg-[#E5F4F2] p-2 text-[#86CBBF]"
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
            justifyContent="center"
            bg="#F8D57E"
            rounded="full"
            w={{ base: "80", sm: "96" }}
            h={{ base: "80", sm: "96" }}
          >
            <Box
              position="absolute"
              left={{ base: -12, sm: -24 }}
              top={{ base: -12, sm: 8 }}
            >
              <Star size={24} bgColor="#c16f66" coverColor="#F8F9FF" />
            </Box>
            <Box
              position="absolute"
              top={{ base: "-28", sm: "-24" }}
              left={{ base: "4", sm: "10" }}
            >
              <Iphone height="96" width="72" />
            </Box>

            <Box position="absolute" bottom="40" right={{ base: 14, sm: 16 }}>
              <Star size={12} bgColor="#FFF" coverColor="#F8D57E" />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
