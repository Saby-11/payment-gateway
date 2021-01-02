import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import { Footer } from './views/Footer';

ReactDOM.render(
  <div>
    <Router>
      <Routes />
    </Router>
    <Footer />
  </div>,
  document.getElementById('root')
);
