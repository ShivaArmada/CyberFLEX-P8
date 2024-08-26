// axeptio.js

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

// Gestion des cookies avec Axeptio
void 0 === window._axcb && (window._axcb = []);
window._axcb.push(function(axeptio) {
  axeptio.on("cookies:complete", function(choices) {
    if (!choices.consents.devis_cookie) {
      // Utilisation de localStorage pour garder les infos temporairement
      localStorage.setItem('devisInfo', JSON.stringify({ 
        // Remplacez par vos informations de devis
        nom: "Nom de l'utilisateur",
        email: "email@example.com",
        date: new Date().toISOString()
      }));
    } else {
      // Stockage via un cookie ou toute autre méthode appropriée
      document.cookie = "devisInfo=" + encodeURIComponent(JSON.stringify({ 
        // Remplacez par vos informations de devis
        nom: "Nom de l'utilisateur",
        email: "email@example.com",
        date: new Date().toISOString()
      })) + "; path=/; max-age=86400"; // 1 jour
    }
  });
});