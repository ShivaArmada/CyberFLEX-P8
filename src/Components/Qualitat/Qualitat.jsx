import React from "react";
import "../Qualitat/Qualitat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faPalette, faHandshake } from "@fortawesome/free-solid-svg-icons";

const Qualitat = () => {
  return (
    <div className="qualitat--section">
      <div className="qualitat--panel">
        <div className="qualitat--header">
          <h3 className="qualitat--message">
            <FontAwesomeIcon icon={faSeedling} className="qualitat--logo" />
            Nouvelle Pousse
          </h3>
        </div>
        <p>
          En tant que nouveau talent dans le domaine du développement web, je
          représente un investissement prometteur avec un potentiel infini pour
          votre entreprise.
        </p>
      </div>
      <div className="qualitat--panel">
        <div className="qualitat--header">
          <h3 className="qualitat--message">
            <FontAwesomeIcon icon={faPalette} className="qualitat--logo" />
            Artistique
          </h3>
        </div>
        <p>
          Des millions de designs, des milliers de façons de faire, des
          centaines de bonnes idées. Partageons la tâche ensemble :<br></br>
          j&apos;apporterai des idées pour que, ensemble, nous façonnions vos
          projets.
        </p>
      </div>
      <div className="qualitat--panel">
        <div className="qualitat--header">
          <h3 className="qualitat--message">
            <FontAwesomeIcon icon={faHandshake} className="qualitat--logo" />
            Commercial
          </h3>
        </div>
        <p className="qualitat--commercial">
          Chez CyberFLEX, nous combinons expertise commerciale et sens du
          relationnel pour créer des solutions qui font la différence, pour
          vous.
        </p>
      </div>
    </div>
  );
};

export default Qualitat;