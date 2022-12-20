import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from 'src/components/common/Header';
import Footer from 'src/components/common/Footer';
import { Spinner } from '@chakra-ui/react';

type IDefaultProps = {
  meta: ReactNode;
  children: ReactNode;
};

const DefaultTemplate = ({ meta, children }: IDefaultProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <>
      {meta}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultTemplate;
