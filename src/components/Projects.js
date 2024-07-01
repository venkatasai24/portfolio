import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import ECommerce from "../assets/e-commerce.png";
import Face from "../assets/face.png";
import Ui from "../assets/ui.png";
import Sort from "../assets/sort.png";
import Bbms from "../assets/bbms.png";

const projects = [
  {
    title: "UI",
    description:
      "Developed a platform to help users explore and share interview experiences, providing valuable insights for students, professionals, and career-switchers. Key features include bookmarking, advanced search, and markdown support for rich text formatting. Enabled users to read, write, and filter career experiences by categories/tags, and view detailed author profiles. Utilized the MERN stack and JWT for secure user authentication and authorization.",
    image: Ui,
    github: "https://github.com/venkatasai24/UI",
    live: "https://ui-vs.vercel.app",
  },
  {
    title: "Blood Bank Management System",
    description:
      "Blood Bank Management System (BBMS) is a web-based application designed to efficiently manage blood donations, recipients and donors. It provides an integrated platform for donors and recipients to ensure the availability of safe and life-saving blood for those in need. Donors can easily register, schedule donations, and track their contributions, while recipients gain quick access to available blood units for timely transfusions.",
    image: Bbms,
    github: "https://github.com/venkatasai24/Blood-Bank-Management-System",
    live: "https://bbms-nitc.000webhostapp.com/",
  },
  {
    title: "E-Commerce",
    description:
      "Created a robust e-commerce platform using the MERN stack, featuring secure user authentication via JWT, streamlined checkout processes, and integrated Stripe for secure payments. Utilized responsive design principles for cross-device accessibility, providing users with a seamless and user-friendly shopping experience. The platform includes dynamic search capabilities, efficient product filtering, real-time cart updates, and a comprehensive order history.",
    image: ECommerce,
    github: "https://github.com/venkatasai24/Ecommerce",
    live: "https://ecommerce-vs.vercel.app/login",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Programmed a face recognition system using TensorFlow and OpenCV, leveraging the VGG19 architecture. Trained on 100 images per person for 3 individuals, achieving an accuracy of 93% on the training dataset. Implemented an attendance logging where recognized names are added to a CSV file along with timestamps.",
    image: Face,
    github:
      "https://github.com/venkatasai24/Face-Recognition-Attendance-System/",
  },
  {
    title: "Sorting Visualizer",
    description:
      "Experience sorting algorithms like never before with the Sorting Visualization project. This interactive tool allows you to see the magic of sorting in real-time, supporting algorithms like bubble sort and merge sort. Developed with HTML, CSS, and JavaScript, it's beginner-friendly yet insightful for experts. Don't just read about sorting algorithms, witness them in action!",
    image: Sort,
    github: "https://github.com/venkatasai24/Sorting-Visualizer/",
    live: "https://sorting-visualizer-3bxs.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center text-gray-800 mb-14">
          {"<Projects/>"}
        </h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="border-r-2 border-l-2 border-red-500 p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-2xl hover:text-black transition duration-300"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-2xl hover:text-indigo-500 transition duration-300"
                      >
                        <FaLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
