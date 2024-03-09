import {
  Avatar,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function RealStories() {
  const customerData = [
    {
      name: "Lauren M.",
      title: "UI Designer @Bo",
      content:
        "Anima's Landing Page UI kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.",
    },
    {
      name: "David B.",
      title: "Lead Designer @Creative",
      content:
        "The Landing Page Ui Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!",
    },
  ];

  return (
    <Flex
      direction="column"
      justifyContent="center"
      bg="#F8D57E"
      h={{ base: "auto", sm: "100vh" }}
      pb={{ base: 12, sm: 0 }}
    >
      <Flex direction="column" alignItems="center" gap={5}>
        <Text
          textAlign={{ base: "center", sm: "left" }}
          fontWeight="bold"
          fontSize="4xl"
          my={{ base: 12, sm: 0 }}
        >
          Real Stories <br className="sm:hidden" /> from Satisfied Customers
        </Text>
        <Text fontSize="lg" textAlign="center">
          See how our landing page ui kit is making an impact.
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
        gap={6}
        mx={12}
        mt={20}
      >
        {customerData.map((item) => (
          <Card
            key={item.name}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            borderRadius="2xl"
          >
            <Flex
              mt={10}
              w="full"
              direction={"column"}
              alignItems="center"
              my={10}
              ml={{ sm: 5 }}
            >
              <Avatar
                name={item.name}
                src="https://bit.ly/sage-adebayo"
                size="2xl"
              />
              <Text pt={5} fontWeight="bold">
                {item.name}
              </Text>
              <Text>{item.title}</Text>
            </Flex>
            <Flex direction="column" justifyContent="center">
              <Stack>
                <CardBody>
                  <Heading size="md"></Heading>
                  <Text>"{item.content}"</Text>
                </CardBody>
              </Stack>

              <Flex
                mb={{ base: 10, sm: 0 }}
                order={{ sm: -1 }}
                justifyContent={{ base: "center", sm: "normal" }}
                pl={{ sm: 4 }}
              >
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Icon
                      key={index}
                      icon="fluent-emoji-flat:star"
                      className="h-7 w-7"
                    />
                  ))}
              </Flex>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Flex>
  );
}
