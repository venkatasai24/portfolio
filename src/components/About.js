import React from "react";
import { motion } from "framer-motion";
import Avatar from "../assets/venkata_sai.jpg"; // Replace with your avatar image path
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center py-20 bg-white mt-24 md:mt-0 lg:mt-0"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="md:w-1/2 md:pr-16 mb-10 md:mb-0 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={Avatar}
            alt="Avatar"
            className="w-72 h-72 object-cover border-4 border-yellow-400 transition duration-300 ease-in-out animate-blob"
            loading="lazy"
          />
        </motion.div>
        <div className="md:w-1/2">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 mb-2">👋 Hi !</p>
            <p className="text-lg text-gray-600 mb-2">
              This is{" "}
              <a
                href="https://www.linkedin.com/in/venkata-sai-vedurupaka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-green-500 hover:bg-black">
                  Venkata Sai
                </span>
              </a>{" "}
              from <i className="hover:text-black">Andhra Pradesh</i>, a proud graduate of{" "}
              <i className="hover:text-black">NIT Calicut</i> 🎓.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Currently working as an <i className="hover:text-black">SDE-1</i> 👨‍💻 at{" "}
              <a
                href="https://www.linkedin.com/company/increff/posts/?feedView=all"
                className="text-red-500 hover:bg-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Increff
              </a>
              . I previously interned here as an <i className="hover:text-black">SDE Intern</i>, where I worked on various technologies like Flask, Kubernetes, and more to optimize infrastructure workflows 🚀.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Earlier, I developed vision therapy games 🎮 at{" "}
              <a
                href="https://www.linkedin.com/company/apvinlabs/posts/?feedView=all"
                className="text-blue-500 hover:bg-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apvin Labs
              </a>{" "}
              using React.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              I’m passionate about building impactful web applications ⚒️ and solving complex problems.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer text-white py-3 px-6 m-4 lg:ml-0 md:ml-0 transition duration-300 ease-in-out transform border-b-4 bg-black border-transparent hover:border-yellow-400"
              >
                View Projects
              </Link>
              <a
                href="https://drive.google.com/file/d/1120kuU0KZCbaGno7ePDLGTfin8oGLPhY/view"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white py-3 px-6 m-4 transition duration-300 ease-in-out transform border-b-4 bg-black border-transparent hover:border-yellow-400"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
