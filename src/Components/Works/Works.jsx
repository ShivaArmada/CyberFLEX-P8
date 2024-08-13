import React, { useState } from 'react';
import './Works.css';

const dataAbout = [
  {
    id: 1,
    title: 'Project 2 / Openclassroom',
    picture: 'https://via.placeholder.com/150',
    content: 'Booki - Frontend',
    tags: ['HTML', 'CSS']
  },
  {
    id: 2,
    title: 'Project 3 / Openclassroom',
    picture: 'https://via.placeholder.com/150',
    content: 'Sophie Bluel - Login- Popup',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    title: 'Project 4 / Openclassroom',
    picture: 'https://via.placeholder.com/150',
    content: 'Nina Carducci - Optimisation SEO',
    tags: ['HTML', 'SEO', 'CSS', 'Design']
  },
  {
    id: 4,
    title: 'Project 5 / Openclassroom',
    picture: 'https://via.placeholder.com/150',
    content: 'Kasa - React app',
    tags: ['React', 'Node.js']
  },
  {
    id: 6,
    title: 'Project 6 / Openclassroom',
    picture: 'https://via.placeholder.com/150',
    content: 'Mon vieux Grimoire - Backend',
    tags: ['Node.js', 'Express', 'MongoDB']
  }
];

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <>
      <div id="works" className="whoami">
        <h2>Mes réalisations</h2>
      </div>
      <div className="works--container">
        {dataAbout.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className="whoami project">
            <h2 className="works--title--project">{project.title}</h2>
            <img src={project.picture} alt={project.title} className="works--picture" />
            <p className="works-content-text">{project.content}</p>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < dataAbout.length && (
        <button onClick={showMoreProjects} className="show-more-button">Afficher +</button>
      )}
    </>
  );
};

export default Works;