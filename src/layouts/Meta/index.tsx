import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { metaConfig } from 'src/configs';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="application-name" content={metaConfig.title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={metaConfig.title} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="manifest" href={`${router.basePath}/site.webmanifest`} />
      </Head>
      <NextSeo
        {...metaConfig}
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          url: props.canonical,
          title: props.title,
          description: props.description,
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
    </>
  );
};

export default Meta;
