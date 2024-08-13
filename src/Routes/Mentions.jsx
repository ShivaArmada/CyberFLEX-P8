import React from "react";
import GradientBackground from "../BlocWrapper/block"; // Assurez-vous que le chemin est correct et cohérent avec le nom de fichier et l'exportation
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import MentionsText from "../Components/Mentions/Mentions";


function Mentions() {
    return (
      <div className="container">
        <GradientBackground />
        <div className="app-content">
          <Header />
          <MentionsText />
          <Footer />
        </div>
      </div>
    );
  }

export default Mentions;
