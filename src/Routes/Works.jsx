import React from "react";
import AppWrapper from "../BlocWrapper/block"; // Assurez-vous que le chemin est correct et cohérent avec le nom de fichier et l'exportation
import "../Styles/Works.css";
import Header from "../Components/Header/Header";


function Works() {
  return (
    <AppWrapper>
      <div className="App">
        < Header />
        
      </div>
    </AppWrapper>
  );
}

export default Works;
