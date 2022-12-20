import DefaultTemplate from 'src/templates/DefaultTemplate';
import Meta from 'src/layouts/Meta';
import { Button, Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <DefaultTemplate
      meta={<Meta title="Page not found" description="The requested URL was not found." />}
    >
      <Flex mt={28} direction="column" align="center">
        <Text fontFamily="Avenir Next" fontSize="5xl" fontWeight="semibold">
          404
        </Text>
        <Text color="whiteAlpha.500">Page not found</Text>
        <Text color="whiteAlpha.500">The page you&apos;re looking for is not available</Text>
        <Button background="transparent" border="1px solid #A9AEAD" w="180px">
          <ChakraLink as={Link} href="/">
            <Text color="#A9AEAD" fontWeight="medium">
              Back to home
            </Text>
          </ChakraLink>
        </Button>
      </Flex>
    </DefaultTemplate>
  );
};

export default NotFound;
