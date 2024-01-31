import React from 'react'

import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';

import { Col, Row } from 'antd';

import profilePic from '/root/SEI/portfolio/quynguy-portfolio/src/assets/images/portfolio-picture.jpg';

const Home = () => {
  return (
    <div className="homeContainer">
      <Row>
          <Col span={18} push={6}>
            <div className="profileRight">
              <div className="bannerText">
                <h1> About Me </h1>
              </div>

              <div className="bannerText sub">
                <p>
                Hello there! I'm a passionate front-end web developer with a love for creating captivating online experiences. My journey into the world of web development began in 2021 when I embarked on a self-taught exploration of coding languages and design principles. Eager to deepen my skills and immerse myself in a supportive community, I joined General Assembly in 2023, where I honed my craft and embraced the latest industry standards.
                My Design isn't just a part of my work—it's my obsession. I thrive on the challenge of blending aesthetics with functionality to craft web pages that not only look stunning but also provide seamless user experiences. Whether it's experimenting with color palettes, perfecting typography, or optimizing layouts for responsiveness, I find joy in every step of the creative process.
                Let's connect and collaborate on bringing your digital vision to life!
                </p>
              </div>

            </div>
          </Col>

          <Col span={6} pull={18}>
            <div className="profileLeft">
              <div className="headshot">
                <img src={profilePic} alt="le quyen's portfolio picture"/>
              </div>
          
              <div className="profileText">
                <h3>Le "Quyen" Nguyen</h3>
                <p>Web Developer</p>
              </div>
            </div>
          </Col>
          
        </Row>
    </div>
  )
}

export default Home;