import React from "react";
import ProjectCard from "./ProjectCard";
import littleEars from "../assets/littleEars.jpg";
import littleJob from "../assets/jobMate.jpg";
import bandb from "../assets/b&b.jpg";
import blog from "../assets/blog.png";
import santa from "../assets/christmas.jpg";

const projectsData = [
  {
    imgSrc: santa,
    title: "Secret Santa",
    description:
      "Share your wishlist and let the app send gift ideas to your gifter — no awkward guessing, just perfect surprises!",
    year: "2025",
  },
  {
    imgSrc: blog,
    title: "She Codes & Grow",
    description:
      "Mobile application for discovering and booking unique travel experiences.",
    year: "2025",
  },
  {
    imgSrc: bandb,
    title: "Body&Balance",
    description:
      "Get customized workouts, real-time guidance. Your AI companion for reaching your fitness goals.",
    year: "2025",
  },
  {
    imgSrc: littleJob,
    title: "JobMate",
    description:
      "Smart extension that auto-fills job application forms with your CV details",
    year: "2025",
  },
  {
    imgSrc: littleEars,
    title: "Little Ears",
    description:
      "AI-powered app that creates personalized, soothing tales to spark imagination and help kids fall asleep with a smile.",
    year: "2025",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Mobile Dashboard",
    description:
      "Analytics dashboard for a health tracking mobile application.",
    year: "2021",
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
