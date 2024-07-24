import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Splunk Deployment on AWS',
    description: 'Automates AWS resource provisioning and Splunk Enterprise installation via Terraform and Ansible.',
  },
  {
    title: 'Microsoft Azure Sentinel - Honeypot Deployment',
    description: 'Developed PowerShell script for Windows Event Viewer metadata extraction and Azure Sentinel workbook visualization.',
  },
  {
    title: 'Application Security on Kubernetes',
    description: 'Orchestrated the integration of a WAF-based Ingress controller to fortify security for web applications on Kubernetes.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Projects
      </motion.h2>
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
