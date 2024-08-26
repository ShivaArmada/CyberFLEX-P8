import React, { useState, useEffect } from "react";
import "./Works.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretUp,
  faSquareCaretDown,
} from "@fortawesome/free-regular-svg-icons";
import {
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import P2 from "../../Assets/ProjetsPic/P2.webp";
import P3 from "../../Assets/ProjetsPic/P3.webp";
import P4 from "../../Assets/ProjetsPic/P4.webp";
import P5 from "../../Assets/ProjetsPic/P5.webp";
import P6 from "../../Assets/ProjetsPic/P6.webp";
import P21 from "../../Assets/ProjetsPic/PicCollapse/P2-1.webp";
import P22 from "../../Assets/ProjetsPic/PicCollapse/P2-2.webp";
import P31 from "../../Assets/ProjetsPic/PicCollapse/P3-1.webp";
import P32 from "../../Assets/ProjetsPic/PicCollapse/P3-2.webp";
import P41 from "../../Assets/ProjetsPic/PicCollapse/P4-1.webp";
import P42 from "../../Assets/ProjetsPic/PicCollapse/P4-2.webp";
import P51 from "../../Assets/ProjetsPic/PicCollapse/P5-1.webp";
import P52 from "../../Assets/ProjetsPic/PicCollapse/P5-2.webp";
import P61 from "../../Assets/ProjetsPic/PicCollapse/P6-1.webp";
import P62 from "../../Assets/ProjetsPic/PicCollapse/P6-2.webp";

const dataAbout = [
  {
    id: 1,
    title: "Project 2 / Openclassrooms",
    picture: P2,
    content: "Booki - Frontend",
    tags: ["HTML", "CSS"],
    description:
      "Pour la start-up Booki, j'ai travaillé sur la création de la page d'accueil de leur agence de voyage. L'objectif était de concevoir une interface responsive en utilisant HTML et CSS, tout en respectant les maquettes fournies pour les versions mobile, tablette et desktop. Le projet a été estimé à 80 heures de travail. La maîtrise des techniques de création d'interfaces web responsives est indispensable pour un développeur front-end. Ces compétences garantissent une expérience utilisateur optimale sur tous les types d'appareils, un aspect crucial pour la réussite de tout site web ou application.",
    picdescription: [P21, P22],
    github_link: "https://github.com/ShivaArmada/Booki-main",
  },
  {
    id: 2,
    title: "Project 3 / Openclassrooms",
    picture: P3,
    content: "Sophie Bluel - Login- Popup",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "En tant que développeur front-end pour l'agence ArchiWebos, qui compte 50 salariés, j'ai récemment achevé mon dernier projet en avance. On m'a donc assigné à une équipe travaillant sur la création du site portfolio d'une architecte d'intérieur. Ce lundi matin, j'ai participé à mon premier brief d'équipe, où j'ai reçu toutes les informations nécessaires pour démarrer le projet. La création de pages web dynamiques avec JavaScript est une compétence essentielle pour un développeur front-end. Savoir gérer les interactions utilisateur et communiquer avec des APIs est indispensable pour concevoir des sites web interactifs et fonctionnels. Ces compétences me préparent à relever des défis plus complexes dans le domaine du développement web et à augmenter ma valeur en tant que développeur front-end.",
    picdescription: [P31, P32],
    github_link:
      "https://github.com/ShivaArmada/Portfolio-architecte-sophie-bluel-master",
  },
  {
    id: 3,
    title: "Project 4 / Openclassrooms",
    picture: P4,
    content: "Nina Carducci - Optimisation SEO",
    tags: ["HTML", "SEO", "CSS", "Design"],
    description:
      "Dans ce projet, j'interviens en tant que développeur freelance pour optimiser le site web de Nina Carducci, photographe, avec pour objectif d'améliorer ses performances, son référencement (SEO) et son accessibilité. La maîtrise des techniques d'optimisation SEO et d'accessibilité est cruciale pour maximiser la visibilité et l'accessibilité des sites web, tout en enrichissant l'expérience utilisateur et la satisfaction des clients. Ces compétences sont très recherchées dans le secteur du développement web.",
    picdescription: [P41, P42],
    github_link: "https://github.com/ShivaArmada/Nina-Shiva-soutenance",
  },
  {
    id: 4,
    title: "Project 5 / Openclassrooms",
    picture: P5,
    content: "Kasa - React app",
    tags: ["React", "Styled-components", "Sass"],
    description:
      "Kasa, un acteur majeur de l'industrie, s'est lancé dans la refonte de son ancien site, autrefois bâti sur ASP.NET, en adoptant une stack JavaScript moderne, avec React pour le front-end et Node.js pour le back-end. Ma mission est de lancer ce projet en respectant les maquettes Figma élaborées par le designer Paul, tout en développant les composants et routes nécessaires. Ce projet représente une opportunité d'affiner des compétences clés en développement web, notamment la maîtrise de React et de React Router, ainsi que l'utilisation de Sass pour la gestion du CSS. Ces compétences sont hautement valorisées dans l'industrie pour la création d'applications interactives et réactives.",
    picdescription: [P51, P52],
    github_link: "https://github.com/ShivaArmada/react-code-kasa",
  },
  {
    id: 6,
    title: "Project 6 / Openclassrooms",
    picture: P6,
    content: "Mon vieux Grimoire - Backend",
    tags: ["Node.js", "Express", "MongoDB"],
    description:
      "Une application web de gestion de bibliothèque permettant de consulter, ajouter, modifier et supprimer des livres. L'application est responsive et développée en HTML et CSS. Ma mission était de développer le backend avec Node.js, Express et MongoDB, en créant une API RESTful pour gérer les livres et une base de données MongoDB pour les stocker.",
    picdescription: [P61, P62],
    github_link: "https://github.com/ShivaArmada/p6-Backend-Fullstack",
  },
];

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    if (selectedProjectId !== null) {
      const activeElement = document.getElementById(
        `project-${selectedProjectId}`
      );
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedProjectId]);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects((prevVisibleProjects) =>
      Math.max(prevVisibleProjects - 3, 3)
    );
  };

  const handleProjectClick = (id) => {
    setSelectedProjectId((prevSelectedProjectId) =>
      prevSelectedProjectId === id ? null : id
    );
  };

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div id="works" className="whoami">
        <h2>Mes réalisations</h2>
      </div>
      <div className="works--container" itemScope itemType="http://schema.org/ItemList">
        {dataAbout.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className={`whoami project ${
              selectedProjectId && selectedProjectId !== project.id
                ? "hidden"
                : ""
            } ${selectedProjectId === project.id ? "works-active" : ""}`}
            id={`project-${project.id}`}
            tabIndex={-1}
            onClick={() => handleProjectClick(project.id)}
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/CreativeWork"
          >
            <h2 className="works--title--project" itemProp="headline">{project.title}</h2>
            <div className="works--picture-container">
              <img
                src={project.picture}
                alt={project.title}
                className="works--picture"
                id={`project-${project.id}`}
                loading="lazy"
                itemProp="image"
              />
            </div>
            <div className="works-content-container">
              <p className="works-content-text" itemProp="about">{project.content}</p>
            </div>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag" itemProp="keywords">
                  {tag}
                </span>
              ))}
            </div>
            <div
              className={`dropdown-content ${
                selectedProjectId === project.id ? "visible" : "hidden"
              }`}
              itemProp="description"
            >
              <p className="works-content-text" id="works-drop-text">
                {project.description}
              </p>
              <div className="dropdown-pics-container">
                {Array.isArray(project.picdescription) &&
                  project.picdescription.map((pic, index) => (
                    <img
                      src={pic}
                      alt={`${project.title} ${index + 1}`}
                      className="dropdown-pics"
                      key={index}
                      id={`project-${project.id}-${index}`}
                      onClick={() => handleImageClick(pic)}
                      loading="lazy"
                      itemProp="image"
                    />
                  ))}
              </div>
              <span className="github_link">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  itemProp="url"
                >
                  <FontAwesomeIcon icon={faSquareGithub} size="2x" className="github_link_logo"/>
                </a>
              </span>
            </div>
            <span className="works-icon">
              <FontAwesomeIcon
                icon={
                  selectedProjectId === project.id
                    ? faSquareCaretUp
                    : faSquareCaretDown
                }
              />
            </span>
          </div>
        ))}
      </div>
      <div className={`buttons-container ${selectedProjectId ? "hidden" : ""}`}>
        {visibleProjects < dataAbout.length ? (
          <button onClick={showMoreProjects} className="show-more-button">
            Afficher +
          </button>
        ) : (
          <button onClick={showLessProjects} className="show-more-button">
            Afficher -
          </button>
        )}
      </div>
    </>
  );
};

export default Works;
