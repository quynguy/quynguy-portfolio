import React from 'react';
import SocialIcons from './SocialMediaIcons';
import profilePic from '/root/SEI/portfolio/quynguy-portfolio/src/assets/images/portfolio-picture.jpg'; 

function NameAndProfile() {
  return (
    <div className="name-and-profile">
      <h2>Le "Quyen" Nguyen</h2>
      <p>Front-End Web Developer</p>
      <div className="speech-bubble">
        <img src={profilePic} alt="Profile" />
        <div className="speech-text">
          <p>Welcome to my portfolio!</p>
        </div>
      </div>
      <SocialIcons />
      <div className="work-status">
        <h2>Accepting Job Offers</h2>
      </div>
    </div>
  );
}

export default NameAndProfile;
