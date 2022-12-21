import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from 'src/components/common/Header';
import Footer from 'src/components/common/Footer';
import { Spinner } from '@chakra-ui/react';
import ThreeBg from 'src/components/Theme/ThreeBg';
import ConnectWallet from 'src/components/ConnectWallet';
import { useAccountCenter } from '@web3-onboard/react';
import { useEffect } from 'react';
import Logo from 'src/components/common/Logo';

type IDefaultProps = {
  meta: ReactNode;
  children: ReactNode;
};

const DefaultTemplate = ({ meta, children }: IDefaultProps) => {
  const router = useRouter();
  const updateAccountCenter = useAccountCenter();

  useEffect(
    () =>
      updateAccountCenter({
        enabled: false,
      }),
    [updateAccountCenter]
  );

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <>
      {meta}
      <Header />
      <Logo/>
      <ConnectWallet />
      <ThreeBg>{children}</ThreeBg>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
