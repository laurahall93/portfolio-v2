import React from "react";

const ProjectCard = ({ imgSrc, title, description, year }) => {
  return (
    <div className="project-card bg-white rounded-lg overflow-hidden font-poppins">
      <div className="h-48 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-playfair">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 flex items-center"
          >
            <span>View Project</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
