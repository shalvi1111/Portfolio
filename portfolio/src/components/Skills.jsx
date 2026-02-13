const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-gray-900 
                 transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 
                       text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Frontend */}
          <div className="bg-gray-50 dark:bg-gray-800 
                          p-8 rounded-xl 
                          shadow-sm dark:shadow-black/40 
                          hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 
                           text-blue-600 dark:text-blue-400">
              Frontend
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>React.js</li>
              <li>Redux Toolkit</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>REST API Integration</li>
              <li>Responsive UI Design</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gray-50 dark:bg-gray-800 
                          p-8 rounded-xl 
                          shadow-sm dark:shadow-black/40 
                          hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 
                           text-blue-600 dark:text-blue-400">
              Backend
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>JWT Authentication</li>
              <li>MVC Architecture</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gray-50 dark:bg-gray-800 
                          p-8 rounded-xl 
                          shadow-sm dark:shadow-black/40 
                          hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 
                           text-blue-600 dark:text-blue-400">
              Tools
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Vercel</li>
              <li>VS Code</li>
              <li>Agile Workflow</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
