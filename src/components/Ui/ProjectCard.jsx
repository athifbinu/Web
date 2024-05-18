import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ projectData }) => {
  return (
    <div className="rounded-xl border border-blue-200  ">
      <div className="p-5 h-auto">
        <motion.img
          whileHover={{ scale: 1.1 }}
          className=""
          src={projectData.ProjectImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProjectCard;
