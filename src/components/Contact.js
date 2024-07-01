import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center text-gray-800 mb-8">
          {"<Connect/>"}
        </h2>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-2 mx-10">
            I'm always open to discussing new projects, creative ideas 💡, or
            opportunities to be part of your vision.
          </p>
          <p className="text-lg text-gray-700 mb-2 mx-10">
            Feel free to reach out if you want to collaborate, hire me, or just
            have a chat 💭!
          </p>
          <p className="text-lg text-gray-700 mb-2 mx-10">
            I'm up for turning great ideas into reality ✨.
          </p>
          <p className="text-lg text-gray-700 mb-6 mx-10">
            Let's brainstorm over a cup of coffee ☕!
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/venkatasai24"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaGithub
                style={{ fontSize: "30px" }}
                className="text-gray-600 group-hover:text-black transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/venkata-sai-vedurupaka"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaLinkedin
                style={{ fontSize: "30px" }}
                className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/venkatasai__24"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaInstagram
                style={{ fontSize: "30px" }}
                className="text-gray-600 group-hover:text-pink-500 transition-colors duration-300"
              />
            </a>
          </div>
          <a
            href="mailto:venkatasai24042004@gmail.com"
            className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 text-gray-600 hover:text-black  py-3 px-6 shadow-md border-b-4 border-transparent hover:border-red-500"
          >
            Work with me
          </a>
        </div>
      </div>
      <footer className="text-center py-4 mt-10 mb-2">
        <p className="text-black">
          &copy; {currentYear} Venkata Sai. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
