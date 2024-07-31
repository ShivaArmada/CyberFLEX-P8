import React from "react";
import AppWrapper from "../BlocWrapper/block"; // Assurez-vous que le chemin est correct et cohérent avec le nom de fichier et l'exportation
import "../Styles/About.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


function About() {
  return (
    <AppWrapper>
      <div className="App">
        < Header />
        < Footer />
      </div>
    </AppWrapper>
  );
}

export default About;
