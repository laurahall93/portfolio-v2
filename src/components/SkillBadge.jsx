import React from "react";

const SkillBadge = ({ name }) => {
  return (
    <span className="skill-badge px-4 py-2 rounded-full bg-secondary text-text transition-all duration-300 hover:bg-accent hover:text-white">
      {name}
    </span>
  );
};

export default SkillBadge;
