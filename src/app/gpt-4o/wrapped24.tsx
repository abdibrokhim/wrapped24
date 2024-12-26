// wrapped_2024_website: Main codebase for Ibrohim Abdivokhidov Wrapped 2024

import React, { useState } from 'react';
import './styles.css'; // Import styles for the website

// Components
import {Hero} from './components/hero';
import {Timeline} from './components/timeline';
import {Projects} from './components/projects';
import {Tutorials} from './components/tutorials';
import {Socials} from './components/socials';
import {Stats} from './components/stats';
import {Reflection} from './components/reflection';
import {Footer} from './components/footer';
import { Contact } from './components/contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Hero />;
      case 'year-in-review':
        return <Timeline />;
      case 'projects':
        return <Projects />;
      case 'tutorials':
        return <Tutorials />;
      case 'socials':
        return <Socials />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app">
      <header>
        <nav className="navbar">
          <button 
            onClick={() => setCurrentPage('home')}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('year-in-review')}
            className={currentPage === 'year-in-review' ? 'active' : ''}
          >
            Year in Review
          </button>
          <button 
            onClick={() => setCurrentPage('projects')}
            className={currentPage === 'projects' ? 'active' : ''}
          >
            Projects
          </button>
          <button 
            onClick={() => setCurrentPage('tutorials')}
            className={currentPage === 'tutorials' ? 'active' : ''}
          >
            Tutorials
          </button>
          <button 
            onClick={() => setCurrentPage('socials')}
            className={currentPage === 'socials' ? 'active' : ''}
          >
            Socials
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className={currentPage === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </nav>
      </header>

      <main>
        {renderPage()}
      </main>

      <Stats />
      <Reflection />
      <Footer />
    </div>
  );
}
