import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { DiMongodb, DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import { SiExpress, SiCplusplus, SiMysql } from "react-icons/si";

const cLogoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"; // Replace with your custom C logo URL

const pythonUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png";

const skills = [
  {
    name: "C",
    icon: <img src={cLogoUrl} alt="C logo" className="w-12 h-12" />,
  },
  {
    name: "C++",
    icon: <SiCplusplus style={{ color: "#00599C" }} />, // C++ icon color
  },
  {
    name: "Python",
    icon: <img src={pythonUrl} alt="python ogo" className="w-12 h-12" />, // Python icon color
  },
  {
    name: "HTML",
    icon: <DiHtml5 style={{ color: "#E34F26" }} />, // HTML icon color
  },
  {
    name: "CSS",
    icon: <DiCss3 style={{ color: "#1572B6" }} />, // CSS icon color
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 style={{ color: "#F7DF1E" }} />, // JavaScript icon color
  },
  {
    name: "React",
    icon: <FaReact style={{ color: "#61DAFB" }} />, // React icon color
  },
  {
    name: "Express",
    icon: <SiExpress style={{ color: "#000000" }} />, // Express icon color
  },
  {
    name: "Node.js",
    icon: <FaNodeJs style={{ color: "#339933" }} />, // Node.js icon color
  },
  {
    name: "MongoDB",
    icon: <DiMongodb style={{ color: "#47A248" }} />, // MongoDB icon color
  },
  {
    name: "SQL",
    icon: <SiMysql style={{ color: "#4479A1" }} />, // SQL icon color
  },
  {
    name: "Git",
    icon: <FaGitAlt style={{ color: "#F05032" }} />, // Git icon color
  },
  {
    name: "Data Structures and Algorithms",
    icon: <FaDatabase style={{ color: "#4DB33D" }} />, // Data Structures and Algorithms icon color
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white mt-10 lg:mt-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center text-gray-800 mb-8">
          {"<Skills/>"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-2 hover:border-red-500 relative flex items-center overflow-hidden bg-white backdrop-filter backdrop-blur-lg border-transparent text-white p-4 m-2 hover:shadow-lg transition duration-300 ease-in-out transform"
            >
              <div className="text-5xl mr-2">{skill.icon}</div>
              <span className="text-gray-600 text-xl font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
