// components/Hero.js
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center text-white px-4 py-8"
      >
        <h1 className="text-5xl font-extrabold mb-4">Hi There </h1>
        <p className="text-xl mb-8">I'M SACHIN PRABAKAR</p>
        <motion.a
          href="#about"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-blue-800 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
