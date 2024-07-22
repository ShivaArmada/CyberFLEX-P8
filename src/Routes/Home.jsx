import React from "react";
import AppWrapper from "../BlocWrapper/block"; // Assurez-vous que le chemin est correct et cohérent avec le nom de fichier et l'exportation
import "../Styles/Home.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


function Home() {
  return (
    <AppWrapper>
      <div className="App">
        < Header />
        < Footer />
      </div>
    </AppWrapper>
  );
}

export default Home;
