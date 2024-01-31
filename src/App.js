import './App.css';


import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

import Home from './components/Home';

function App() {

  return (
    <div className="AppContainer">
      <AppHeader />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <AppFooter />
    </div>
  );
}

export default App;
