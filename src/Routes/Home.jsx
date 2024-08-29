import React from "react";
import GradientBackground from "../BlocWrapper/block";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Whoami from "../Components/Perso-intro/Whoami";
import PanelWords from "../Components/panel-words/PanelWords";
import Qualitat from "../Components/Qualitat/Qualitat";
import Contact from "../Components/Contact/Contact";
import Works from "../Components/Works/Works";

function Home() {
  return (
    <div className="container">
      <GradientBackground />
      <div className="app-content">
        <Header />
        <PanelWords />
        <Whoami />
        <Qualitat />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
