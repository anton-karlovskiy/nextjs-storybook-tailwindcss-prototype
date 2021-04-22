
import { AppProps } from 'next/app';

import Layout from 'parts/Layout';
import 'styles/globals.css';
// TODO: should optimize
import 'components/Accordion/accordion.css';

function MyApp({
  Component,
  pageProps
}: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
