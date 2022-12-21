import { ChakraProvider } from '@chakra-ui/react';
import ErrorBoundary from 'src/layouts/ErrorBoundary';
import { ReactNode, useMemo } from 'react';
import customTheme from 'src/themes';
import { Web3OnboardProvider, init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';

const ETH_RPC_URL = 'https://mainnet.infura.io/v3/c92cd6dd120c4850874f4a11767dca17';

export default function Provider({ children }: { children: ReactNode }) {
  const ethereum = useMemo(() => {
    return {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum',
      rpcUrl: ETH_RPC_URL,
    };
  }, []);
  const chains = useMemo(() => [ethereum], [ethereum]);
  const wallets = useMemo(() => [injectedModule()], []);
  const web3Onboard = useMemo(() => init({ wallets, chains }), [wallets, chains]);
  

  return (
    <ChakraProvider theme={customTheme}>
      <ErrorBoundary>
        <Web3OnboardProvider web3Onboard={web3Onboard}>{children}</Web3OnboardProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
}
