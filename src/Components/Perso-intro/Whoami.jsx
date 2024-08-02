import React from "react";
import "./Whoami.css";
import Carousel from "./Carousel";
import HTML5 from "../../Assets/Devicons/HTML.png";
import CSS3 from "../../Assets/Devicons/CSS.png";
import JavaScript from "../../Assets/Devicons/JS.png";
import ReactLogo from "../../Assets/Devicons/React.png";
import Node from "../../Assets/Devicons/Node.png";
import Express from "../../Assets/Devicons/Express.png";
import MongoDB from "../../Assets/Devicons/MANGODB.png";
import Github from "../../Assets/Devicons/GitHubA.png";

const Whoami = () => {
  const items = [
    { id: 1, src: HTML5, alt: "HTML5" },
    { id: 2, src: CSS3, alt: "CSS3" },
    { id: 3, src: JavaScript, alt: "JavaScript" },
    { id: 4, src: ReactLogo, alt: "React" },
    { id: 5, src: Node, alt: "Node.js" },
    { id: 6, src: Express, alt: "Express" },
    { id: 7, src: MongoDB, alt: "MongoDB" },
    { id: 8, src: Github, alt: "Github actions" },
  ];

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
      <div className="whoami whoami--carousel">
        <Carousel items={items} active={0} />
      </div>
    </>
  );
};

export default Whoami;
