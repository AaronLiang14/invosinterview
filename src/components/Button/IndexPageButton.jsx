import { Button } from "@chakra-ui/react";

export default function IndexPageButton({
  colorScheme,
  color,
  wording,
  children,
  display,
}) {
  return (
    <Button
      borderRadius="xl"
      className="w-52"
      colorScheme={colorScheme}
      color={color}
      display={display}
    >
      {children}
      {wording}
    </Button>
  );
}
