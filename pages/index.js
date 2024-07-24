import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cybersecurity Portfolio</title>
        <meta name="description" content="Cybersecurity portfolio showcasing skills and projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© 2024 Cybersecurity Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
