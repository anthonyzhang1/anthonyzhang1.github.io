/* This file handles the CSS imports and routing. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* The application's CSS. */
import 'bootstrap/dist/css/bootstrap.min.css'; // for React Bootstrap
import './css/About.css';
import './css/Contact.css';
import './css/Home.css';
import './css/Index.css';

/* The components that will be used on every page. */
import Footer from './components/Footer.js';
import NavigationBar from './components/NavigationBar.js';

/* The application's pages. */
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import PageNotFound from './pages/PageNotFound.js';

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
          
          {/* Invalid route */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);