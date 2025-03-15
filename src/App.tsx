import { useEffect, useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark/light mode to body
    document.body.className = darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-900';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        {activeSection === 'home' && <Home darkMode={darkMode} />}
        {activeSection === 'about' && <About darkMode={darkMode} />}
        {activeSection === 'experience' && <Experience darkMode={darkMode} />}
        {activeSection === 'projects' && <Projects darkMode={darkMode} />}
        {activeSection === 'contact' && <Contact darkMode={darkMode} />}
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
