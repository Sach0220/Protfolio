const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="mb-4">Description of the project, highlighting the key features and technologies used.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="mb-4">Description of the project, highlighting the key features and technologies used.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="mb-4">Description of the project, highlighting the key features and technologies used.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  