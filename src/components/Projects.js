import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Modal from '/root/SEI/portfolio/quynguy-portfolio/src/components/Modal.js'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SlotMachinePic from '../assets/images/slot-machine.png';
import WeatherAppPic from '../assets/images/weather-app.png';
import OrchidPic from '../assets/images/Orchid Outpost.png';
import FFPic from '../assets/images/Fields-and-Flavors.png';
import PPPic from '../assets/images/Polygot-Pages.png'

function ProjectsCarousel() {

  const [showModal, setShowModal] = useState(false);
  const sliderRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1
  };

  const projects = [
    {
      name: "Slot Machine",
      description: "Experience the Halloween-themed slot machine crafted with HTML, CSS, and JavaScript. Take a chance by placing your bet and see if Lady Luck is on your side!",
      image: SlotMachinePic,
      demoLink: "https://quynguy.github.io/slot-machine-game/",
      githubLink: "https://github.com/quynguy/slot-machine-game",
    },
    {
      name: "Orchid Outpost",
      description: "Crafted a responsive e-commerce platform, Orchid Outpost, using HTML and CSS, focusing solely on front-end development to offer a seamless shopping experience.",
      image: OrchidPic,
      demoLink: "https://quynguy.github.io/responsive_html_css_e-commerce/",
      githubLink: "https://github.com/quynguy/react-weather-app",
    },
    {
      name: "Polygot Pages Preschool",
      description: "Polyglot Pages: A front-end project fostering multilingual preschool learning and global perspectives with dedicated educators and engaging curriculum.",
      image: PPPic,
      demoLink: "https://65bc20ccbeb63c00805fb6d7--enchanting-valkyrie-747970.netlify.app/",
      githubLink: "https://65bc20ccbeb63c00805fb6d7--enchanting-valkyrie-747970.netlify.app/",
    },
    {
      name: "Weather App",
      description: "Develop a React-based weather app with a sleek interface, utilizing a chosen API for accurate and real-time weather information. What's the weather in your area?",
      image: WeatherAppPic,
      demoLink: "https://65a326ae3ee3e114fcfcbe8b--splendorous-gelato-e4c3f6.netlify.app/",
      githubLink: "https://github.com/quynguy/responsive_html_css_e-commerce?tab=readme-ov-file",
    },
  ];

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModalWithLink = (e, project) => {
    e.preventDefault(); 
    console.log("Opening modal...");
    setSelectedProject(project);
    setShowModal(prevShowModal => {
      console.log("showModal state:", !prevShowModal);
      return true; 
    });
  };

  return (
    <div id="projects" className="projects-carousel-section">
      <h2>My Projects</h2>

      <div className="carousel-wrapper">
        <Slider {...settings} ref={sliderRef}>
          {projects.map((project, index) => (
            <div key={index} className="project">
              
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.name} />

                <div className="project-buttons">
                  <a href={project.demoLink} onClick={(e) => openModalWithLink(e, project)}> <button>Demo</button></a>
                  <a href={project.githubLink} target="_blank"> <button>GitHub</button> </a>
                </div> 
              </div>


            </div>
          ))}
        </Slider>
      </div>

      {showModal && (
        <Modal onClose={closeModal} project={selectedProject}>
        </Modal>
)}

    </div>
  );
}

export default ProjectsCarousel;
