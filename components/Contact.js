const Contact = () => {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="flex justify-center">
            <form className="w-full md:w-1/2 bg-white p-8 rounded shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your message"></textarea>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  