import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="fixed w-full bg-white bg-opacity-90 shadow-sm z-50 font-poppins">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-2xl font-bold text-gray-800 font-playfair"
            >
              Laura Holla
            </a>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                onClick={() => handleScrollTo("home")}
                className="nav-link text-gray-700 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => handleScrollTo("about")}
                className="nav-link text-gray-700 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => handleScrollTo("projects")}
                className="nav-link text-gray-700 hover:text-gray-900"
              >
                Projects
              </a>
            </div>
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <i className="fas fa-bars text-gray-700 text-xl"></i>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onScroll={handleScrollTo}
      />
    </>
  );
};

export default Navigation;
