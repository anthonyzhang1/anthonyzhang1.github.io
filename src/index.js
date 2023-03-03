/* This file handles the imports and routing. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* The CSS files. */
import 'bootstrap/dist/css/bootstrap.min.css'; // for React Bootstrap
import './css/About.css';
import './css/Contact.css';
import './css/Home.css';
import './css/Index.css';
import './css/Work.css';
import './css/Works.css';

/* The components that are used on every page. */
import Footer from './components/Footer.js';
import NavigationBar from './components/NavigationBar.js';

/* The main pages. */
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import PageNotFound from './pages/PageNotFound.js';
import Works from './pages/Works.js';

/* The pages for my works. */
import Gatormmunity from './pages/works/Gatormmunity.js';
import TextBasedRPG from './pages/works/TextBasedRPG.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="index">
        <NavigationBar />

        <Routes>
          {/* Navigation Bar links */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/works' element={<Works />} />

          {/* Works */}
          <Route path='/work/gatormmunity' element={<Gatormmunity />} />
          <Route path='/work/text-based-rpg' element={<TextBasedRPG />} />
          
          {/* Invalid route */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);