import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-blue-900 text-white text-center py-20 overflow-hidden">
      <img src="/images/hero-bg.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-5xl font-extrabold mb-4"
      >
        Welcome to My Cybersecurity Portfolio
      </motion.h1>
      <p className="relative z-10 text-xl mb-8">
        Showcasing my expertise in cybersecurity and related projects.
      </p>
      <motion.a
        href="#about"
        className="relative z-10 inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Learn More
      </motion.a>
    </section>
  );
};

export default Hero;
