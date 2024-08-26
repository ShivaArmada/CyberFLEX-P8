import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TagManager from 'react-gtm-module';
import reportWebVitals from "./reportWebVitals";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import './index.css';
import './cookieManager'; // Importation du gestionnaire de cookies
import Home from './Routes/Home';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const tagManagerArgs = {
  gtmId: 'GTM-KH8B3GBQ'  // Remplacez par votre ID de conteneur GTM
};

TagManager.initialize(tagManagerArgs);

window.axeptioSettings = {
  clientId: "66ac283f88d34fcf2c27efe0",
  cookiesVersion: "cyberflex-fr-EU-2",
  googleConsentMode: {
    default: {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    },
  },
};

(function (d, s) {
  var t = d.getElementsByTagName(s)[0],
    e = d.createElement(s);
  e.async = true;
  e.src = "//static.axept.io/sdk.js";
  t.parentNode.insertBefore(e, t);
})(document, "script");

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

// Gestion des cookies avec Axeptio
void 0 === window._axcb && (window._axcb = []);
window._axcb.push(function(axeptio) {
  axeptio.on("cookies:complete", function(choices) {
    if (choices.consents.devis_cookie) {
      // Charger les pages secondaires après consentement
      setTimeout(() => {
        import('./Routes/Mentions');
        import('./Routes/Notfound');
        import('./Routes/Tarif');
      }, 3000); // Charger après 3 secondes
    } else {
      console.log("L'utilisateur n'a pas consenti aux cookies pour la gestion des devis.");
    }
  });
});
