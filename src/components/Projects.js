// ProjectsCarousel.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectsCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjusted to show only 1 slide at a time
    slidesToScroll: 1
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="projects-carousel-section">
      <h2>My Projects</h2>
      <div className="carousel-wrapper">
        <Slider {...settings} ref={sliderRef}>
          <div className="project">

            <div className="project-info">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="project-image">
              <img src="project1.jpg" alt="Project 1" />
            </div>
          </div>

          <div className="project">

            <div className="project-info">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
            <div className="project-image">
              <img src="project1.jpg" alt="Project 1" />
            </div>
          </div>

          <div className="project">

            <div className="project-info">
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </div>
            <div className="project-image">
              <img src="project1.jpg" alt="Project 1" />
            </div>
          </div>


          {/* Add more project slides as needed */}
        </Slider>
        <div className="carousel-buttons">
          <button onClick={goToPrev}>Prev</button>
          <button onClick={goToNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
