import { useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {

  const aboutRef = useRef(null)

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className="App">
      <Header scrollToAbout={() => scrollToSection(aboutRef)} />
      <div ref={aboutRef}>
        <About />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;