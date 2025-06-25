import React from "react";

const MobileMenu = ({ isOpen, onClose, onScroll }) => {
  if (!isOpen) return null;

  const handleLinkClick = (id) => {
    onScroll(id);
    onClose();
  };

  return (
    <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 font-poppins">
      <button
        className="absolute top-6 right-6 focus:outline-none"
        onClick={onClose}
      >
        <i className="fas fa-times text-gray-700 text-xl"></i>
      </button>
      <a
        href="#home"
        onClick={() => handleLinkClick("home")}
        className="text-xl text-gray-700 hover:text-gray-900"
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => handleLinkClick("about")}
        className="text-xl text-gray-700 hover:text-gray-900"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => handleLinkClick("projects")}
        className="text-xl text-gray-700 hover:text-gray-900"
      >
        Projects
      </a>
    </div>
  );
};

export default MobileMenu;
