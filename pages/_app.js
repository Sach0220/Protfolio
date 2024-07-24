// pages/_app.js
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout key={router.pathname}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
