import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="faq">
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-list">
        
        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question">How do you ensure cross-browser compatibility in your projects?</h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">

            I conduct thorough testing using multiple browsers and browser versions to identify and address any compatibility issues. Additionally, I leverage CSS prefixes and polyfills when necessary and adhere to web standards to minimize cross-browser discrepancies.

            </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>

        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question">What front-end technologies are you proficient in</h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">
              
            I am proficient in HTML5, CSS3, and JavaScript. I have experience working with modern frameworks like React.js and Vue.js as well as libraries such as jQuery.
            
            </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>

        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question">What's your approach to responsive design?</h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">
              
            I prioritize responsive design in all my projects to ensure optimal user experience across various devices and screen sizes. I use CSS media queries and flexible layout techniques like Flexbox and CSS Grid to achieve responsiveness.

              </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>

        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question"> What tools and workflows do you use for front-end development? </h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">

            I use industry-standard tools such as Visual Studio Code as my code editor, Git for version control, and npm or yarn for package management. For task automation and build processes, I often utilize webpack or Parcel.

            </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>

        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question">How do you handle performance optimization in your web applications?</h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">

            I employ various strategies to optimize performance, including code minification, lazy loading of assets, image optimization, and caching techniques. I also leverage browser developer tools to identify and address performance bottlenecks.

            </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>

        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question">Can you describe your experience with front-end frameworks?</h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">

            I have extensive experience working with React.js and Vue.js, building single-page applications (SPAs) and dynamic user interfaces. I am familiar with state management solutions like Redux and Vuex and have integrated APIs and backend services into front-end applications.
              
            </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>

        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question">What are your strengths in web development?</h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">

            My strengths include creating interactive web pages and effectively debugging code. I use browser developer tools, console logging, and various testing techniques to ensure the reliability and quality of my work.
              
            </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>


        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question">What JavaScript frameworks or libraries are you most proficient in?</h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">

            I particularly enjoy working with React for building dynamic user interfaces, Node.js for server-side development, and Express.js for creating robust web applications. These technologies allow me to leverage JavaScript across the full stack, enabling seamless communication between the client and server components of a project.
              
            </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>

        <div className={`faq-item ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          <h3 className="faq-question">What are you currently working on?</h3>
          <div className="faq-answer">
            {expanded && <p className="faq-answer-text">

            I'm currently focused on deepening my understanding of Vue.js, jQuery, and Redux. Exploring these technologies allows me to broaden my skill set and stay up-to-date with the latest developments in web development.
              
            </p>}
          </div>
          <div className="toggle-icon">
            {expanded ? <FaAngleUp /> : <FaAngleDown />}
          </div>
        </div>


      </div>
    </div>
  );
}

export default FAQ;
