import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const { toggleTheme } = useTheme();

  return (
    <>
      <main>
        {activePage === 'home' && <Header />}
        {activePage === 'about' && <About />}
        {activePage === 'experience' && <Experience />}
        {activePage === 'portfolio' && <Portfolio />}
        {activePage === 'contact' && <Contact />}
      </main>

      <div className="controls">
        <div className={`control ${activePage === 'home' ? 'active-btn' : ''}`} onClick={() => setActivePage('home')}>
          <i className="fas fa-home"></i>
        </div>
        <div className={`control ${activePage === 'about' ? 'active-btn' : ''}`} onClick={() => setActivePage('about')}>
          <i className="fas fa-user"></i>
        </div>
        <div className={`control ${activePage === 'experience' ? 'active-btn' : ''}`} onClick={() => setActivePage('experience')}>
          <i className="fa-solid fa-building"></i>
        </div>
        <div className={`control ${activePage === 'portfolio' ? 'active-btn' : ''}`} onClick={() => setActivePage('portfolio')}>
          <i className="fas fa-briefcase"></i>
        </div>
        <div className={`control ${activePage === 'contact' ? 'active-btn' : ''}`} onClick={() => setActivePage('contact')}>
          <i className="fas fa-envelope-open"></i>
        </div>
      </div>
      <div className="theme-btn" onClick={toggleTheme}>
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
}

export default App;
