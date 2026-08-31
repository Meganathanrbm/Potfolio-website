import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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

// The Studio is a few MB on its own, so it is split out of the landing bundle.
const StudioPage = lazy(() => import('./studio/StudioPage'));

function Portfolio() {
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

function App() {
  return (
    <Routes>
      <Route
        path='/studio/*'
        element={
          <Suspense fallback={<div style={{ padding: '2rem' }}>Loading Studio…</div>}>
            <StudioPage />
          </Suspense>
        }
      />
      <Route path='*' element={<Portfolio />} />
    </Routes>
  )
}

export default App;
