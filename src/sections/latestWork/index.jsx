import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function LatestWork() {
  const [cats, setCats] = useState([]);

  const getNews = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=3",
    );
    const data = await response.json();
    setCats(data.slice(0, 3));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Box
      bg="#F8F9FF"
      flex="1"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      h={{ sm: "100vh" }}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
        gap={{ base: 5, sm: 0 }}
        mt={{ base: 5, sm: 0 }}
      >
        <Text
          display={{ base: "none", sm: "block" }}
          fontWeight="bold"
          fontSize="4xl"
        >
          Discover our latest work
        </Text>
        <Text display={{ base: "none", sm: "block" }}>
          Explore our portfolio and see the latest and greatest projects that
          we've brought to life.
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          display={{ base: "block", sm: "none" }}
        >
          Selected Works
        </Text>
        <Text
          fontSize="xl"
          textAlign="center"
          display={{ base: "block", sm: "none" }}
        >
          Explore our portfolio and see the latest projects that we've brought
          to life.
        </Text>
      </Flex>

      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
        gap={4}
        my={12}
        mx={{ base: 5, sm: 0 }}
      >
        {cats.map((cat) => (
          <Card minW="xs" className=" m-auto" borderRadius="2xl" key={cat.id}>
            <CardBody p={0}>
              <Image
                src={cat.url}
                alt={cat.id}
                borderRadius="lg"
                w="full"
                h="250px"
              />
              <Stack mt="6" px={5} pb={5}>
                <Heading size="lg">ID: {cat.id}</Heading>
                <Text>Height: {cat.height}</Text>
                <Text>Width: {cat.width}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
