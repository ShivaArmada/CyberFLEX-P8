import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Notfound from "./Routes/Notfound";
import Mentions from "./Routes/Mentions";
import Tarif from "./Routes/Tarif";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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

// Brevo Conversations {literal}
(function(d, w, c) {
    w.BrevoConversationsID = '66be92ecb1891b1ee904d134';
    w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
    };
    var s = d.createElement('script');
    s.async = true;
    s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
    if (d.head) d.head.appendChild(s);
})(document, window, 'BrevoConversations');
// /Brevo Conversations {/literal}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/tarif" element={<Tarif />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();