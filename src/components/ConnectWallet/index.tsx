import { Button } from '@chakra-ui/react';
import { useConnectWallet } from '@web3-onboard/react';
import { useMemo } from 'react';

export default function ConnectWallet() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const currentWallet = useMemo(()=>wallet?.accounts[0].address, [wallet])

  return (
    <Button
      position="absolute"
      top={8}
      right={4}
      bg="primary.700"
      _hover={{
        bg: 'primary.800',
      }}
      isLoading={connecting}
      onClick={() => (wallet ? disconnect(wallet) : connect())}
    >
      {connecting
        ? 'Connecting'
        : wallet
        ? `Disconnect ${`${currentWallet?.substring(0, 6)}...${currentWallet?.substring(
            currentWallet?.length - 4
          )}`}`
        : 'Connect Wallet'}
    </Button>
  );
}
