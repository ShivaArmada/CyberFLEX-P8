import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TagManager from 'react-gtm-module';
import reportWebVitals from "./reportWebVitals";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import './index.css';
import './axeptio'; 
import Home from './Routes/Home';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const tagManagerArgs = {
  gtmId: 'GTM-KH8B3GBQ'  // Remplacez par votre ID de conteneur GTM
};

TagManager.initialize(tagManagerArgs);

// Lazy loading des routes
const Notfound = lazy(() => import('./Routes/Notfound'));
const Mentions = lazy(() => import('./Routes/Mentions'));
const Tarif = lazy(() => import('./Routes/Tarif'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/tarif" element={<Tarif />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

// Enregistrement du Service Worker pour mettre en cache les images
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('Service Worker enregistré avec succès :', registration.scope);
    }, function(err) {
      console.log('Échec de l\'enregistrement du Service Worker :', err);
    });
  });
}