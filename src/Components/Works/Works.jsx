import React, { useState } from 'react';
import './Works.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
import P2 from '../../Assets/ProjetsPic/P2.png';
import P3 from '../../Assets/ProjetsPic/P3.png';
import P4 from '../../Assets/ProjetsPic/P4.png';
import P5 from '../../Assets/ProjetsPic/P5.png';
import P6 from '../../Assets/ProjetsPic/P6.png';

const dataAbout = [
  {
    id: 1,
    title: 'Project 2 / Openclassrooms',
    picture: P2,
    content: 'Booki - Frontend',
    tags: ['HTML', 'CSS'],
    description: 'Booki '
  },
  {
    id: 2,
    title: 'Project 3 / Openclassrooms',
    picture: P3,
    content: 'Sophie Bluel - Login- Popup',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'regdrger'
  },
  {
    id: 3,
    title: 'Project 4 / Openclassrooms',
    picture: P4,
    content: 'Nina Carducci - Optimisation SEO',
    tags: ['HTML', 'SEO', 'CSS', 'Design'],
    description: 'frevedsqrfgvbf'
  },
  {
    id: 4,
    title: 'Project 5 / Openclassrooms',
    picture: P5,
    content: 'Kasa - React app',
    tags: ['React', 'Node.js'],
    description: 'ergbvfrdebvgderf'
  },
  {
    id: 6,
    title: 'Project 6 / Openclassrooms',
    picture: P6,
    content: 'Mon vieux Grimoire - Backend',
    tags: ['Node.js', 'Express', 'MongoDB'],
    description: 'Une application web de gestion de bibliothèque permettant de consulter, ajouter, modifier et supprimer des livres. L\'application est responsive et développée en HTML et CSS. Ma mission était de développer le backend avec Node.js, Express et MongoDB, en créant une API RESTful pour gérer les livres et une base de données MongoDB pour les stocker.'
  }
];

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects((prevVisibleProjects) => Math.max(prevVisibleProjects - 3, 3));
  };

  const handleProjectClick = (id) => {
    setSelectedProjectId((prevSelectedProjectId) => (prevSelectedProjectId === id ? null : id));
  };

  return (
    <>
      <div id="works" className="whoami">
        <h2>Mes réalisations</h2>
      </div>
      <div className="works--container">
        {dataAbout.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className={`whoami project ${selectedProjectId && selectedProjectId !== project.id ? 'hidden' : ''} ${selectedProjectId === project.id ? 'works-active' : ''}`}
            onClick={() => handleProjectClick(project.id)}
          >
            <h2 className="works--title--project">
              {project.title}
            </h2>
            <div className='works--picture-container'>
              <img src={project.picture} alt={project.title} className="works--picture" id={`project-${project.id}`} />
            </div>
            <div>
              <p className="works-content-text">{project.content}</p>
            </div>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className={`dropdown-content ${selectedProjectId === project.id ? 'visible' : 'hidden'}`}>
              <p className="works-content-text" id='works-drop-text'>{project.description}</p>

            </div>
            <span className='works-icon'>
              <FontAwesomeIcon icon={selectedProjectId === project.id ? faSquareCaretUp : faSquareCaretDown} />
            </span>
          </div>
        ))}
      </div>
      <div className={`buttons-container ${selectedProjectId ? 'hidden' : ''}`}>
        {visibleProjects < dataAbout.length ? (
          <button onClick={showMoreProjects} className="show-more-button">Afficher +</button>
        ) : (
          <button onClick={showLessProjects} className="show-more-button">Afficher -</button>
        )}
      </div>
    </>
  );
};

export default Works;