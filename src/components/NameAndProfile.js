import React from 'react';
import SocialIcons from './SocialMediaIcons';
import profilePic from '/root/SEI/portfolio/quynguy-portfolio/src/assets/images/portfolio-picture.jpg'; 

function NameAndProfile() {
  return (
    <div className="name-and-profile">
      <h2>Le "Quyen" Nguyen</h2>
      <p>Front-End Web Developer</p>
      <img src={profilePic} alt="Profile" />
      <SocialIcons />

        <div className="work-status">
          <h2>Open For Work</h2>
        </div>
    </div>
  );
}

export default NameAndProfile;
