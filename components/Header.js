import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-cover bg-center text-white py-4 shadow-lg" style={{ backgroundImage: 'url("/images/header-bg.jpg")' }}>
      <nav className="container flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">Cybersecurity Portfolio</Link>
        </h1>
        <ul className="flex space-x-6">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
