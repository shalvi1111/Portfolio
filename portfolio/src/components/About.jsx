const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 
                 transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10 
                       text-gray-900 dark:text-white">
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-400 
                      text-lg leading-8">
          I am a frontend-focused developer specializing in building
          responsive and scalable web applications using React.js.
          I focus on writing clean, maintainable code and designing
          intuitive user interfaces that enhance user experience.
        </p>

        <p className="text-gray-700 dark:text-gray-400 
                      text-lg leading-8 mt-6">
          I have hands-on experience with Redux Toolkit for state management
          and integrating REST APIs to create dynamic applications.
          I am also comfortable working with backend technologies like
          Node.js, Express.js, and MongoDB to support full-stack development.
        </p>

      </div>
    </section>
  );
};

export default About;
