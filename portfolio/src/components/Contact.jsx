const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-gray-950 
                 transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10 
                       text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-400 
                      text-lg leading-8 mb-10">
          I am currently open to internship and entry-level frontend
          opportunities. Feel free to reach out for collaboration
          or professional opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          {/* Email Button */}
          <a
            href="mailto:shuklashalvi53@gmail.com?subject=Frontend%20Opportunity&body=Hi%20Shalvi%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
            className="px-8 py-3 bg-blue-600 text-white 
                       rounded-lg shadow-md 
                       hover:bg-blue-700 hover:shadow-lg 
                       transition-all duration-300"
          >
            Email Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shalvi1111"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border 
                       border-gray-300 dark:border-gray-700
                       text-gray-800 dark:text-gray-200
                       rounded-lg 
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       transition-all duration-300"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/shalvi-shukla"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border 
                       border-gray-300 dark:border-gray-700
                       text-gray-800 dark:text-gray-200
                       rounded-lg 
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       transition-all duration-300"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
