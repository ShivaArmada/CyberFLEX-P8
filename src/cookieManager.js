/**
 * Function to handle cookie management.
 *//*

 Dans cookieManager.js, après l'exemple précédent
if (!choices.consents.devis_cookie) {
    // Utilisation de localStorage pour garder les infos temporairement
    localStorage.setItem('devisInfo', JSON.stringify({ /*... tes infos de devis ... }));
  } else {
    // Stockage via un cookie ou toute autre méthode appropriée
    document.cookie = "devisInfo=" + encodeURIComponent(JSON.stringify({ /*... tes infos de devis ... })) + "; path=/; max-age=86400"; // 1 jour
  } 
  */