import { motion } from 'framer-motion';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-900 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="#about"><a className="text-lg font-bold hover:text-secondary">About</a></Link>
          <Link href="#projects"><a className="text-lg font-bold hover:text-secondary">Projects</a></Link>
          <Link href="#contact"><a className="text-lg font-bold hover:text-secondary">Contact</a></Link>
        </nav>
      </header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>© 2024 Sachin Prabakar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
