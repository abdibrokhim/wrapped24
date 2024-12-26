// wrapped_2024_website: Main codebase for Ibrohim Abdivokhidov Wrapped 2024

// Import React and necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
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
  return (
    <Router>
      <div className="app">
        <header>
          <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} end>Home</NavLink>
            <NavLink to="/year-in-review" className={({ isActive }) => isActive ? "active" : ""}>Year in Review</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
            <NavLink to="/tutorials" className={({ isActive }) => isActive ? "active" : ""}>Tutorials</NavLink>
            <NavLink to="/socials" className={({ isActive }) => isActive ? "active" : ""}>Socials</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/year-in-review" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Stats />
        <Reflection />
        <Footer />
      </div>
    </Router>
  );
}
