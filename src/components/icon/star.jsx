import { Box, Grid } from "@chakra-ui/react";

export default function Star({ size, bgColor, coverColor }) {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      bg={bgColor}
      w={size}
      h={size}
      position="absolute"
    >
      <Box
        w={size / 2}
        h={size / 2}
        bg={coverColor}
        roundedBottomRight="full"
      ></Box>
      <Box
        w={size / 2}
        h={size / 2}
        bg={coverColor}
        roundedBottomLeft="full"
      ></Box>
      <Box
        w={size / 2}
        h={size / 2}
        bg={coverColor}
        roundedTopRight="full"
      ></Box>
      <Box
        w={size / 2}
        h={size / 2}
        bg={coverColor}
        roundedTopLeft="full"
      ></Box>
    </Grid>
  );
}
