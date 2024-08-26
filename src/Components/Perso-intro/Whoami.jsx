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
    { id: 1, src: HTML5, alt: "HTML5", rating: 5 },
    { id: 2, src: CSS3, alt: "CSS3", rating: 4.5 },
    { id: 3, src: JavaScript, alt: "JavaScript", rating: 4 },
    { id: 4, src: ReactLogo, alt: "React", rating: 4.5 },
    { id: 5, src: Node, alt: "Node.js", rating: 4 },
    { id: 6, src: Express, alt: "Express", rating: 1 },
    { id: 7, src: MongoDB, alt: "MongoDB", rating: 3 },
    { id: 8, src: Github, alt: "Github actions", rating: 4 },
  ];

  return (
    <>
      <div className="whoami whoami--intro" itemscope itemtype="http://schema.org/Person">
        <h2 className="whoami--intro--title">Qui suis-je ?</h2>
        <p className="whoami--intro--text" itemprop="description">
          Depuis mon enfance, la technologie m&apos;a toujours fasciné, des
          premiers jeux sur PC à la réparation d&apos;ordinateurs.
          Aujourd&apos;hui, ce parcours m&apos;amène à créer des expériences web
          captivantes. Mon engagement est guidé par une conviction simple :
          &quot;Si d&apos;autres peuvent le faire, alors j&apos;en ferai mon
          affaire.&quot; Avec ce mantra en tête, je suis prêt à relever de
          nouveaux défis et à apporter des solutions innovantes dans le
          développement web.
        </p>
      </div>
      <div className="whoami whoami--carousel">
        <Carousel items={items} active={0} />
      </div>
    </>
  );
};

export default Whoami;
