import Meta from 'src/layouts/Meta';
import type { NextPage } from 'next';
import DefaultTemplate from 'src/templates/DefaultTemplate';
import { Box, Flex } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <DefaultTemplate meta={<Meta title="" description="" />}>
      <Box h="90vh" w="100vw" position="absolute" mt={28} px={4} overflow="hidden">
        <Flex
          bg="rgba(255, 255, 255, 0.1)"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
          backdropFilter="blur(18px)"
          borderRadius="16px"
          w="full"
          h="full"
          position="relative"
          overflow="hidden"
        >
         
        </Flex>
      </Box>
    </DefaultTemplate>
  );
};

export default Home;
