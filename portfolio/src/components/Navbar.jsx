import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-gray-900 dark:text-white transition-colors duration-300">
          Shalvi Shukla
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-300">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 
                       text-gray-800 dark:text-gray-200 
                       hover:scale-105 transition-all duration-300"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 px-6 pb-4 space-y-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <a href="#projects" className="block hover:text-blue-600">Projects</a>
          <a href="#skills" className="block hover:text-blue-600">Skills</a>
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
