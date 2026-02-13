const Hero = () => {
  return (
    <section
      className="min-h-screen pt-24 flex items-center justify-center 
                 bg-gray-50 dark:bg-gray-950 
                 transition-colors duration-300"
    >
      <div className="text-center max-w-3xl mx-auto px-6">

        <h1 className="text-4xl md:text-6xl font-bold 
                       text-gray-900 dark:text-white 
                       mb-6 tracking-tight">
          Shalvi Shukla
        </h1>

        <h2 className="text-xl md:text-2xl 
                       text-blue-600 dark:text-blue-400 
                       font-semibold mb-6">
          Frontend Developer (React.js)
        </h2>

        <p className="text-gray-600 dark:text-gray-400 
                      text-lg leading-relaxed mb-8">
          I build responsive and scalable web applications using React.js 
          with clean UI, efficient state management, and optimized performance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 
                       transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Projects
          </a>

          <a
            href="https://github.com/shalvi1111"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 
                       text-gray-800 dark:text-gray-200 
                       rounded-lg 
                       hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-all duration-300"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
