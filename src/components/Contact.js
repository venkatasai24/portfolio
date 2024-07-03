import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { SiCodechef, SiCodeforces, SiGmail, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const currentYear = new Date().getFullYear();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVER_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.");
          setIsLoading(false);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="pt-20 bg-white">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center text-gray-800 mb-8">
          {"<Connect/>"}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:venkatasai24042004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <SiGmail
              style={{ fontSize: "30px" }}
              className="text-gray-600 group-hover:text-red-500 transition-colors duration-300"
            />
          </a>
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
            href="https://codechef.com/users/venkatsai_2004"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <SiCodechef
              style={{ fontSize: "30px" }}
              className="text-gray-600 group-hover:text-yellow-900 transition-colors duration-300"
            />
          </a>
          <a
            href="https://codeforces.com/profile/venkatasai_2004"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <SiCodeforces
              style={{ fontSize: "30px" }}
              className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300"
            />
          </a>
          <a
            href="https://leetcode.com/u/venkatasai24/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <SiLeetcode
              style={{ fontSize: "30px" }}
              className="text-gray-600 group-hover:text-yellow-500 transition-colors duration-300"
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
            I'm up for turning great ideas into reality 🔮.
          </p>
          <p className="text-lg text-gray-700 mb-6 mx-10">
            Let's brainstorm over a cup of coffee ☕!
          </p>
          <form ref={form} onSubmit={sendEmail} className="text-center mb-8">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 focus:outline-none focus:border-red-500 focus:rounded-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 focus:outline-none focus:border-red-500 focus:rounded-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 focus:outline-none focus:border-red-500 focus:rounded-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`cursor-pointer text-white py-3 px-6 transition duration-300 ease-in-out transform border-b-4 bg-black border-transparent hover:border-yellow-400 ${
                isLoading && "border-yellow-400"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "sending ..." : "Send Message"}
            </button>
          </form>
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
