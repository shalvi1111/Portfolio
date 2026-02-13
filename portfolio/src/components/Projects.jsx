const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {/* Zerodha Replica */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-black/40 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Zerodha Replica
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              React-based trading dashboard with portfolio tracking,
              Redux state management, and interactive data visualization.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">React</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Redux Toolkit</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Chart.js</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/shalvi1111/Zerodha-Clone"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://zerodha-clone-re4b-3i1ef4y7q-shalvi1111s-projects.vercel.app/orders"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Live
              </a>
            </div>
          </div>

          {/* Cool Trendy Vogue */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-black/40 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Cool Trendy Vogue
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full-stack e-commerce platform featuring authentication,
              product management, shopping cart functionality, and
              Stripe payment integration.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">React</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Redux Toolkit</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Node.js</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Express</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">MongoDB</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/shalvi1111/CoolTrendyVogue"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Family Event Registration App */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-black/40 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Family Event Registration App
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full-stack event registration system with authentication,
              dynamic multi-member form handling, QR code generation,
              QR scanning, and MongoDB Atlas integration.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">React</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Node.js</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Express</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">MongoDB Atlas</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">QR Integration</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/shalvi1111/Family_Event_App"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Journey Travel Platform */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-black/40 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Journey Travel Platform
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full-stack travel listing platform with JWT authentication,
              REST API integration, and booking management functionality.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Node.js</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">Express</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">MongoDB</span>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs">JWT</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/shalvi1111/Journeys-Website"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://journeys-travel-website.onrender.com/listings"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Live
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
