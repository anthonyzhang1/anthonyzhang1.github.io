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
import ScrollToTop from './components/ScrollToTop.js';

/* The main pages. */
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import PageNotFound from './pages/PageNotFound.js';
import Works from './pages/Works.js';

/* The pages for my works. */
import AnthonyZhangWebsite from './pages/works/AnthonyZhangWebsite.js';
import CFileSystem from './pages/works/CFileSystem.js';
import Gatormmunity from './pages/works/Gatormmunity.js';
import Hitoribocchi from './pages/works/Hitoribocchi.js';
import Moneyish from './pages/works/Moneyish.js';
import MyPhotoWebsite from './pages/works/MyPhotoWebsite.js';
import Rratchan from './pages/works/Rratchan.js';
import TextBasedRPG from './pages/works/TextBasedRPG.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <div className="index">
        <NavigationBar />

        <Routes>
          {/* Navigation Bar links */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/works' element={<Works />} />

          {/* Works */}
          <Route path='/works/anthony-zhang-website' element={<AnthonyZhangWebsite />} />
          <Route path='/works/c-file-system' element={<CFileSystem />} />
          <Route path='/works/gatormmunity' element={<Gatormmunity />} />
          <Route path='/works/hitoribocchi' element={<Hitoribocchi />} />
          <Route path='/works/moneyish' element={<Moneyish />} />
          <Route path='/works/my-photo-website' element={<MyPhotoWebsite />} />
          <Route path='/works/rratchan' element={<Rratchan />} />
          <Route path='/works/text-based-rpg' element={<TextBasedRPG />} />

          {/* Invalid route */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);