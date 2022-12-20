import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { metaConfig } from 'src/configs';
import Provider from 'src/contexts/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <DefaultSeo {...metaConfig} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
