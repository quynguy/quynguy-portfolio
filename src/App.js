import './App.css';


import AppFooter from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NameAndProfile from '/root/SEI/portfolio/quynguy-portfolio/src/components/NameAndProfile.js';
import FAQ from './components/FAQ';

function App() {

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Le Quyen Nguyen</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="content-wrapper">
        <div className="left-side">
          <div className="scrollable-content">
            <About />
            <Skills />
            <FAQ />
          </div>
        </div>
        <div className="right-side">
          <NameAndProfile />
          <Projects />
          <Contact />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
