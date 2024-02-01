// ProjectsCarousel.js
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Modal from '/root/SEI/portfolio/quynguy-portfolio/src/components/Modal.js'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SlotMachinePic from '../assets/images/slot-machine.png';
import WeatherAppPic from '../assets/images/weather-app.png';

function ProjectsCarousel() {

  const [showModal, setShowModal] = useState(false);
  const sliderRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjusted to show only 1 slide at a time
    slidesToScroll: 1
  };

  const projects = [
    {
      name: "Slot Machine",
      description: "Las Vegas Casino Game",
      image: SlotMachinePic,
      demoLink: "https://quynguy.github.io/slot-machine-game/",
    },
    {
      name: "Weather App",
      description: "Weather App created using React",
      image: WeatherAppPic,
      demoLink: "https://65a326ae3ee3e114fcfcbe8b--splendorous-gelato-e4c3f6.netlify.app/",
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
    e.preventDefault(); // Prevent default link behavior
    console.log("Opening modal...");
    setSelectedProject(project);
    setShowModal(prevShowModal => {
      console.log("showModal state:", !prevShowModal);
      return true; // Update the showModal state to true
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
                <a href={project.demoLink} onClick={(e) => openModalWithLink(e, project)}>Demo</a>
                  <img src={project.image} alt={project.name} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {showModal && (
        <Modal onClose={closeModal} project={selectedProject}>
        {/* Additional children if needed */}
        </Modal>
)}

    </div>
  );
}

export default ProjectsCarousel;
