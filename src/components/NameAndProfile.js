// NameAndProfile.js
import React from 'react';
import profilePic from '/root/SEI/portfolio/quynguy-portfolio/src/assets/images/portfolio-picture.jpg'; // Path to your profile picture

function NameAndProfile() {
  return (
    <div className="name-and-profile">
      <h2>Le "Quyen" Nguyen</h2>
      <img src={profilePic} alt="Profile" />
    </div>
  );
}

export default NameAndProfile;
