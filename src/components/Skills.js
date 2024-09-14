import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiCplusplus, SiMysql } from "react-icons/si";
import pythonUrl from "../assets/icons/Python.svg";
import numpyUrl from "../assets/icons/NumPy.svg";
import matplotlibUrl from "../assets/icons/Matplotlib.svg";
import tailUrl from "../assets/icons/Tailwind CSS.svg";
import pandasUrl from "../assets/icons/pandas.svg";
import oopsUrl from "../assets/icons/computer.png";
import dsaUrl from "../assets/icons/data-structure.png";

const skills = [
  {
    name: "C++",
    icon: <SiCplusplus style={{ color: "#00599C" }} />, // C++ icon color
  },
  {
    name: "Algorithms",
    icon: (
      <img src={dsaUrl} alt="dsa logo" className="w-12 h-12" loading="lazy" />
    ), // dsa icon color
  },
  {
    name: "Oops",
    icon: (
      <img src={oopsUrl} alt="oops logo" className="w-12 h-12" loading="lazy" />
    ), // oops icon color
  },
  {
    name: "Python",
    icon: (
      <img
        src={pythonUrl}
        alt="python logo"
        className="w-12 h-12"
        loading="lazy"
      />
    ), // Python icon color
  },
  {
    name: "TailWind CSS",
    icon: (
      <img
        src={tailUrl}
        alt="tailwind css logo"
        className="w-12 h-12"
        loading="lazy"
      />
    ), // Python icon color
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
    name: "MatPlotLib",
    icon: (
      <img
        src={matplotlibUrl}
        alt="mat logo"
        className="w-12 h-12"
        loading="lazy"
      />
    ), // Python icon color
  },
  {
    name: "Numpy",
    icon: (
      <img src={numpyUrl} alt="num logo" className="w-12 h-12" loading="lazy" />
    ), // Python icon color
  },
  {
    name: "Pandas",
    icon: (
      <img
        src={pandasUrl}
        alt="pandas logo"
        className="w-12 h-12"
        loading="lazy"
      />
    ), // Python icon color
  },
  {
    name: "Git",
    icon: <FaGitAlt style={{ color: "#F05032" }} />, // Git icon color
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
              <span
                className={`text-gray-600 text-xl font-semibold ${
                  ["Algorithms", "Git", "MongoDB", "Express"].includes(
                    skill.name
                  ) && `text-green-500 hover:bg-black`
                }`}
              >
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
