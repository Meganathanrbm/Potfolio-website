import React from 'react';
import Nav from './components/Nav';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import SmoothScroll from './components/SmoothScroll';
import Home from './sections/Home';
import About from './sections/About';
import Profile from './sections/Profile';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


function App() {
  return (
    <div className='bg-paper dark:bg-ink-900'>
     <div className='grain-overlay'/>
     <SmoothScroll/>
     <Preloader/>
     <Cursor/>
     <ScrollProgress/>
     <Nav />
     <Home/>
     <hr className='divider'/>
     <About/>
     <hr className='divider'/>
     <Profile/>
     <hr className='divider'/>
     <Projects/>
     <hr className='divider'/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App;
