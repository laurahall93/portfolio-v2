import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="text-2xl font-bold text-gray-800 font-playfair"
            >
              Laura Holla
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-center md:text-left font-poppins">
            <a
              href="#home"
              className="nav-link text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link text-gray-700 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#projects"
              className="nav-link text-gray-700 hover:text-gray-900"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/laura-hallx/"
              className="text-gray-500 hover:text-purple-500"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="" className="text-gray-500 hover:text-purple-500">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500">
              <i className="fas fa-blog text-xl"></i>
            </a>
          </div>
          <p className="text-gray-500 font-poppins">
            &copy; 2025 Laura Holla Hall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
