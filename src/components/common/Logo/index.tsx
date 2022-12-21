import { Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Image
      src="/assets/images/logo.png"
      alt="logo"
      objectFit="contain"
      w="200px"
      borderRadius="16px"
      position="absolute"
      top="4"
      left="4"
    />
  );
}
