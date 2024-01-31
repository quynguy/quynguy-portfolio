import React from 'react'
import { Anchor } from 'antd';

const { Link } = Anchor;

const AppHeader = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="logo">
          <h1>Header</h1>
          <a href="#"> Name Logo Here </a>
        </div>
          {/* <div className="navContainer">
            <Anchor targetOffset="65">
              <Link href="#home" title="Home" />
              <Link href="#about" title="About Us" />
              <Link href="#programs" title="Programs" />
              <Link href="#enrollment" title="Enrollment" />
              <Link href="#faq" title="FAQs"  />
              <Link href="#contact" title="Contact Us" />                        
            </Anchor>
          </div> */}
      </div>
    </div>
  )
}

export default AppHeader;