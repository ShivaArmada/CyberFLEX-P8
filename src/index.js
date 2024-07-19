import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Works from "./Routes/Works";
import Notfound from "./Routes/Notfound";
import "./index.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();