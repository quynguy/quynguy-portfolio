import React from 'react';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";


function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://github.com/quynguy"><FaGithub size={30}/></a>
      <a href="https://www.linkedin.com/in/nquyenle/"><FaLinkedin size={30}/></a>
      <a href="mailto:wquyenle.dev@gmail.com"><MdEmail size={33}/></a>
    </div>
  );
}

export default SocialIcons;
