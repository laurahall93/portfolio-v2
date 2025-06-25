import React from "react";
import SkillBadge from "./SkillBadge";
import profilePic from "../assets/profile-pic.jpeg";

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "AWS",
    "PostgreSQL",
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-playfair">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={profilePic}
                alt="Laura working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12 font-poppins">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              A little about myself
            </h3>
            <p className="text-gray-700 mb-6">
              I'm a front-end developer passionate about crafting intuitive,
              engaging web experiences. With a background in React, TypeScript,
              and collaborative UX design, I thrive on creating solutions that
              are both visually appealing and user-centric.
            </p>
            <p className="text-gray-700 mb-8">
              My approach blends technical expertise with meticulous attention
              to detail, ensuring solutions are robust, maintainable, and
              scalable. While I specialize in the JavaScript ecosystem, I'm also
              experienced in backend technologies and thrive as a full-stack
              developer, continuously expanding my skills.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 font-playfair">
                My Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center text-gray-700 hover:text-gray-900"
            >
              <span>Download Resume</span>
              <i className="fas fa-download ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
