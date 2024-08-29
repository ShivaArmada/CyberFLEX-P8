import React from "react";
import GradientBackground from "../BlocWrapper/block"; 
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Tarifs from "../Components/Tarifs/Tarif";


function Tarif() {
    return (
      <div className="container">
        <GradientBackground />
        <div className="app-content">
          <Header />
          <Tarifs />
          <Footer />
        </div>
      </div>
    );
  }

export default Tarif;
