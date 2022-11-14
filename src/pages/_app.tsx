import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import MainLayout from '../components/layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
