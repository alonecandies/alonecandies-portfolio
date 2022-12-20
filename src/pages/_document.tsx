import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { metaConfig } from 'src/configs';
import { config } from '../themes/configs';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={metaConfig.lang}>
        <Head>
          <Script
            id="schema-script"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'Product',
                name: '',
                about:
                  '',
                url: 'https://alonecandies.com',
              }),
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={config?.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
