// SocialIcons.js
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="your_twitter_link"><FaTwitter /></a>
      <a href="your_facebook_link"><FaFacebook /></a>
      <a href="your_instagram_link"><FaInstagram /></a>
      <a href="your_linkedin_link"><FaLinkedin /></a>
    </div>
  );
}

export default SocialIcons;
