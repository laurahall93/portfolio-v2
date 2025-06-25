import React from "react";
import profilePic from "../assets/profile-pic.jpeg";

const Hero = () => {
  return (
    <section
      className="hero-section min-h-screen flex items-center pt-20"
      id="home"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              Hello, I'm <span className="text-gray-600">Laura</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-playfair">
              Full Stack Software Engineer
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg font-poppins">
              I craft elegant digital experiences with a focus on clean design
              and intuitive functionality.
            </p>
            <div className="flex space-x-4 font-poppins">
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-900 text-gray-900 rounded hover:bg-gray-100 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={profilePic}
                alt="Laura"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
