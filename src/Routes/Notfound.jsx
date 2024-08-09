import React from "react";
import GradientBackground from "../BlocWrapper/block"; // Assurez-vous que le chemin est correct et cohérent avec le nom de fichier et l'exportation
import "../Styles/Notfound.css";
import NotFound from "../Components/Notfound/Notfound";

function Notfound() {
  return (
    <div className="container">
      <GradientBackground />
      <div className="app-content">
        <NotFound />
      </div>
    </div>
  );
}

export default Notfound;