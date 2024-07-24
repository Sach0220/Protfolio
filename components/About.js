import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-8"
      >
        About Me
      </motion.h2>
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <p className="text-lg mb-4">
          I am a dedicated cybersecurity professional with expertise in threat detection, vulnerability management, and incident response. My passion lies in protecting systems and data from malicious attacks and ensuring robust security measures are in place.
        </p>
        <p className="text-lg">
          With a background in various security tools and technologies, I continuously strive to stay updated with the latest trends and advancements in the cybersecurity domain.
        </p>
      </div>
    </section>
  );
};

export default About;
