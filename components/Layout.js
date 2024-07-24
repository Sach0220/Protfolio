import Head from 'next/head';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Cybersecurity Portfolio</title>
        <meta name="description" content="Portfolio of a Cybersecurity Professional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          opacity: 0,
          x: -200,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}>
        <main>{children}</main>
      </motion.div>
    </div>
  );
};

export default Layout;
