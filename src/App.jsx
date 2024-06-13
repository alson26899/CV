import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        {/* <StarsCanvas />  */}
      </div>
    </BrowserRouter>
  );
};

export default App;
