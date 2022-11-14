import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import MainLayout from '../components/layouts/MainLayout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainLayout>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </MainLayout>
    </>
  );
}

export default MyApp;
