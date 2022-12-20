import { ChakraProvider } from '@chakra-ui/react';
import ErrorBoundary from 'src/layouts/ErrorBoundary';
import { ReactNode } from 'react';
import customTheme from 'src/themes';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={customTheme}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ChakraProvider>
  );
}
