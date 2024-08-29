import React from "react";
import GradientBackground from "../BlocWrapper/block"; 
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