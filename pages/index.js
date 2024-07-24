import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import background from '../public/images/hero-bg.jpeg'; // Ensure this path is correct


export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden bg-gray-900 text-white min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="flex items-center justify-center h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-left px-6 md:px-12">
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              I am Sachin Prabakar
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Security Professional
            </motion.p>
            <a href="#about" className="btn-primary">Learn More</a>
          </div>
        </section>
        
        {/* About Me Section */}
        <section id="about" className="py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <p className="text-lg mb-8">
              Dynamic Cyber Security Analyst with 2.5 years of expertise in real-time monitoring, threat analysis, and incident management. Proven track record of enhancing security operations and ensuring system resilience through innovative solutions and global SOC collaboration.
            </p>
            <p className="text-lg mb-8">
              With a Master of Engineering in Internetworking from Dalhousie University and a Bachelor of Engineering in Computer Science, I have hands-on experience in network traffic analysis, incident response, and security tools.
            </p>
            <h3 className="text-xl font-bold mt-4">Education</h3>
            <p className="text-lg mb-4">Master of Engineering (M. Eng) in Internetworking, Dalhousie University, Halifax, Canada (Sep 2022 - Apr 2024)</p>
            <p className="text-lg mb-8">Bachelor of Engineering (B. Tech) in Computer Science, Jain University, India (Aug 2016 - Jul 2020)</p>
            <h3 className="text-xl font-bold mt-4">Work Experience</h3>
            <p className="text-lg mb-4 font-bold">Senior Cyber Security Analyst, NxtGen Infinite Datacenter & Cloud Technologies, India (Apr 2021 - Aug 2022)</p>
            <p className="text-lg mb-4 font-bold">Cyber Security Analyst, NxtGen Infinite Datacenter & Cloud Technologies, India (Jul 2020 - Apr 2021)</p>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.h3
                  className="text-xl font-semibold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <a href="https://github.com/sachin078/Splunk-deployment-in-aws-using-terraform-and-ansible" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Splunk Deployment on AWS</a>
                </motion.h3>
                <p>Automates AWS resource provisioning and Splunk Enterprise installation via Terraform and Ansible.</p>
              </motion.div>
              <motion.div
                className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.h3
                  className="text-xl font-semibold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <a href="https://github.com/sachin078/Microsoft-Azure-Azure-Sentinel-SIEM-SOAR-" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Azure Sentinel - Honeypot Deployment</a>
                </motion.h3>
                <p>Using the PowerShell script for Windows Event Viewer metadata extraction and Azure Sentinel workbook visualization.</p>
              </motion.div>
              <motion.div
                className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.h3
                  className="text-xl font-semibold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <a href="https://github.com/sachin078/KubeSEC" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Application Security on Kubernetes</a>
                </motion.h3>
                <p>Orchestrated the integration of a WAF-based Ingress controller to fortify security for web applications on Kubernetes.</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact
            </motion.h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-lg border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="btn-primary">Send</button>
            </form>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-4 text-center bg-gray-800">
          <p>&copy; 2024 Cybersecurity Portfolio. All rights reserved.</p>
          <p>Contact: sachin02prabakar@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/sachin-prabakar" className="text-blue-400 hover:underline">LinkedIn</a> | 
            <a href="https://github.com/sachin078" className="text-blue-400 hover:underline">GitHub</a>
          </p>
        </footer>
      </main>
    </>
  );
}
