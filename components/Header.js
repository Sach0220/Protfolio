const Header = () => {
    return (
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Cybersecurity Portfolio</h1>
          <nav>
            <a href="#about" className="mx-2">About</a>
            <a href="#projects" className="mx-2">Projects</a>
            <a href="#contact" className="mx-2">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  