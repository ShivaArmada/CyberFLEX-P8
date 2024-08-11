import React from "react";
import GradientBackground from "../BlocWrapper/block"; // Assurez-vous que le chemin est correct et cohérent avec le nom de fichier et l'exportation
import "../Styles/Home.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Whoami from "../Components/Perso-intro/Whoami";
import PanelWords from "../Components/panel-words/PanelWords";
import Qualitat from "../Components/Qualitat/Qualitat";
import Contact from "../Components/Contact/Contact";

function Home() {
  return (
    <div className="container">
      <GradientBackground />
      <div className="app-content">
        <Header />
        <PanelWords />
        <Whoami />
        <Qualitat />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
