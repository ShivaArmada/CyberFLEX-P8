import React from "react";
import "../Qualitat/Qualitat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faPalette, faHandshake } from "@fortawesome/free-solid-svg-icons";

const Qualitat = () => {
  return (
    <div className="qualitat--section" itemScope itemType="http://schema.org/ItemList">
      <div className="qualitat--panel" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <div className="qualitat--header">
          <h3 className="qualitat--message" itemProp="name">
            <FontAwesomeIcon icon={faSeedling} className="qualitat--logo" />
            Nouvelle Pousse
          </h3>
        </div>
        <p itemProp="description">
          En tant que nouveau talent dans le domaine du développement web, je
          représente un investissement prometteur avec un potentiel infini pour
          votre entreprise.
        </p>
      </div>
      <div className="qualitat--panel" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <div className="qualitat--header">
          <h3 className="qualitat--message" itemProp="name">
            <FontAwesomeIcon icon={faPalette} className="qualitat--logo" />
            Artistique
          </h3>
        </div>
        <p itemProp="description">
          Des millions de designs, des milliers de façons de faire, des
          centaines de bonnes idées. Partageons la tâche ensemble :<br></br>
          j&apos;apporterai des idées pour que, ensemble, nous façonnions vos
          projets.
        </p>
      </div>
      <div className="qualitat--panel" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <div className="qualitat--header">
          <h3 className="qualitat--message" itemProp="name">
            <FontAwesomeIcon icon={faHandshake} className="qualitat--logo" />
            Commercial
          </h3>
        </div>
        <p className="qualitat--commercial" itemProp="description">
          Chez CyberFLEX, nous combinons expertise commerciale et sens du
          relationnel pour créer des solutions qui font la différence, pour
          vous.
        </p>
      </div>
    </div>
  );
};

export default Qualitat;