import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white text-gray-600 py-6 relative z-10">
      {/* Transparent glass effect */}
      <div className="absolute inset-0 bg-opacity-40 backdrop-filter backdrop-blur-lg"></div>

      <div className="container mx-auto flex justify-between items-center relative">
        <h1 className="text-3xl text-black font-bold mx-4">{"<VS/>"}</h1>
        <nav className="hidden md:flex space-x-4">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="about"
                spy={true}
                activeClass="current-section"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-black border-b-4 pb-1 border-transparent hover:border-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                activeClass="current-section"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-black border-b-4 pb-1 border-transparent hover:border-black"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                activeClass="current-section"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-black border-b-4 pb-1 border-transparent hover:border-black"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                activeClass="current-section"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-black border-b-4 pb-1 border-transparent hover:border-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden mx-4">
          <button onClick={toggleMenu} className="text-2xl text-black">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden absolute inset-x-0 top-20 bg-none bg-opacity-90 backdrop-filter backdrop-blur-lg z-20">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="about"
                spy={true}
                activeClass="current-section"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-black border-b-4 pb-1 border-transparent hover:border-black"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                activeClass="current-section"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-black border-b-4 pb-1 border-transparent hover:border-black"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                activeClass="current-section"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-black border-b-4 pb-1 border-transparent hover:border-black"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                activeClass="current-section"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-black border-b-4 pb-1 border-transparent hover:border-black"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
