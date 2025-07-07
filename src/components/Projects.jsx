import React from "react";
import ProjectCard from "./ProjectCard";
import littleEars from "../assets/littleEars.jpg";
import littleJob from "../assets/jobMate.jpg";
import bandb from "../assets/b&b.jpg";
import blog from "../assets/blog.png";
import santa from "../assets/christmas.jpg";
import taskmaster from "../assets/taskmaster.png";

const projectsData = [
  {
    imgSrc: santa,
    title: "Secret Santa",
    description:
      "Comming soon. Share your wishlist and let the app send gift ideas to your gifter — no awkward guessing, just perfect surprises!",
    year: "2025",
  },
  {
    imgSrc: blog,
    title: "She Codes & Grow",
    description:
      "Live. Mobile application for discovering and booking unique travel experiences.",
    year: "2025",
    link: "https://blog.laurah.dev",
  },
  {
    imgSrc: bandb,
    title: "Body&Balance",
    description:
      "Comming soon. Get customized workouts, real-time guidance. Your AI companion for reaching your fitness goals.",
    year: "2025",
  },
  {
    imgSrc: littleJob,
    title: "JobMate",
    description:
      "Comming soon. Smart extension that auto-fills job application forms with your CV details",
    year: "2025",
  },
  {
    imgSrc: littleEars,
    title: "Little Ears",
    description:
      "Comming soon. AI-powered app that creates personalized, soothing tales to spark imagination and help kids fall asleep with a smile.",
    year: "2025",
  },
  {
    imgSrc: taskmaster,
    title: "ChoreMaster",
    description: "Comming soon. Task companion for your everyday life",
    year: "2025",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-playfair">
          My Projects
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto font-poppins">
          Here are some of my recent works that showcase my design and
          development skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              year={project.year}
              link={project.link}
            />
          ))}
        </div>

        {/* <div className="text-center mt-12 font-poppins">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-800 text-gray-800 rounded hover:bg-gray-100 transition"
          >
            <span>View All Projects</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
