// SocialIcons.js
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://github.com/quynguy"><FaGithub size={30}/></a>
      <a href="https://linkedin.com/nquyenle"><FaLinkedin size={30}/></a>
    </div>
  );
}

export default SocialIcons;
