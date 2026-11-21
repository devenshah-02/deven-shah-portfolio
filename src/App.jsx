import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import { About, Capabilities, Decisions, Experience, Work } from './components/Sections.jsx';
import { Contact, FinalCta, Footer, Toolbox, Writing } from './components/Closing.jsx';
import { BackToTop } from './components/ui.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Capabilities />
        <About />
        <Work />
        <Decisions />
        <Experience />
        <Toolbox />
        <Writing />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
