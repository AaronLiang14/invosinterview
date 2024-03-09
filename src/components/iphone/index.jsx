import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import iphone from "./iphone.png";

export default function Iphone({ width }) {
  return (
    <Box pos="relative" width={width} zIndex={20}>
      <Grid
        pos="absolute"
        inset="0"
        mx="3"
        my="3"
        gridTemplateRows="repeat(3, 1fr)"
        overflow="hidden"
        rounded="60px"
        bg="#FFF"
      >
        <Box
          gridRow="span 1"
          mt="16"
          display="flex"
          flexDir="column"
          justify="center"
          textAlign="center"
        >
          <Text fontSize="4xl" textAlign="center">
            Upload your image here
          </Text>
          <Icon icon="ph:arrow-down" className="m-auto h-12 w-12 " />
        </Box>

        <Box pos="relative" gridRow="span 2">
          <Box position="relative">
            <Icon
              icon="mdi:circle-half"
              className="absolute -left-12 m-0 h-60 w-10/12 rotate-[235deg] text-[#FF6251]
            "
            ></Icon>
            {/* <div className="absolute  h-1 w-72 -rotate-[35deg] bg-[#66c02a]"></div> */}
          </Box>

          <Box
            pos="absolute"
            bottom={3}
            left={3}
            h={24}
            w={24}
            roundedTopRight="full"
            bg="#F8D57E"
          ></Box>
          <Box
            pos="absolute"
            bottom={1}
            right={2}
            h={52}
            w={12}
            borderBottomRightRadius="full"
            borderTopLeftRadius="full"
            bg="#36F"
          ></Box>
          <Box
            pos="absolute"
            bottom={"-3"}
            right={"5"}
            h={52}
            w={16}
            transform={"rotate(22deg)"}
            roundedTop="lg"
            bg="#36F"
          ></Box>
        </Box>
      </Grid>
      <Image src={iphone} alt="iphone" position="relative" width={width} />
    </Box>
  );
}
