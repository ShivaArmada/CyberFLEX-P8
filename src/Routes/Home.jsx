import React from "react";
import AppWrapper from "../BlocWrapper/block"; // Assurez-vous que le chemin est correct et cohérent avec le nom de fichier et l'exportation
import "../Styles/Home.css";


function Home() {
  return (
    <AppWrapper>
      <div className="App">{/* Contenu de votre application ici */}</div>
    </AppWrapper>
  );
}

export default Home;
