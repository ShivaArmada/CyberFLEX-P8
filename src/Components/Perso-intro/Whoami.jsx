import React from "react";
import "./Whoami.css";
// import Carousel from "./Carousel"; // Assurez-vous que le chemin est correct

const Whoami = () => {
/*
const items = [
  { id: 1, src: "path/to/html5.png", alt: "HTML5" },
  { id: 2, src: "path/to/css3.png", alt: "CSS3" },
  { id: 3, src: "path/to/javascript.png", alt: "JavaScript" },
  { id: 4, src: "path/to/react.png", alt: "React" },
  { id: 5, src: "path/to/nodejs.png", alt: "Node.js" },
  { id: 6, src: "path/to/express.png", alt: "Express" },
  { id: 7, src: "path/to/mongodb.png", alt: "MongoDB" },
  { id: 8, src: "path/to/git.png", alt: "Git" },
];
*/

  return (
    <>
      <div className="whoami whoami--intro">
        <h1>Qui suis-je ?</h1>
        <p>
          Depuis mon enfance, la technologie m&apos;a toujours fasciné, des premiers
          jeux sur PC à la réparation d&apos;ordinateurs. Aujourd&apos;hui, ce parcours
          m&apos;amène à créer des expériences web captivantes. Mon engagement est
          guidé par une conviction simple : &quot;Si d&apos;autres peuvent le faire, alors
          j&apos;en ferai mon affaire.&quot; Avec ce mantra en tête, je suis prêt à
          relever de nouveaux défis et à apporter des solutions innovantes dans
          le développement web.
        </p>
      </div>
      <div className="whoami">
        <h2>Compétences</h2>
        {/* <Carousel items={items} active={0} /> */}
      </div>
    </>
  );
};

export default Whoami;