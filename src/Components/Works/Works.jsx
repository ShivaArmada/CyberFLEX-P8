import React, { useState } from 'react';
import './Works.css';

const dataAbout = [
  {
    id: 1,
    title: 'Project 1',
    picture: "https://via.placeholder.com/150",
    content: 'This is a placeholder for project 1 content.',
    tags: ['React', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    title: 'Project 2',
    picture: 'https://via.placeholder.com/150',
    content: 'Booki',
    tags: ['HTML', 'CSS']
  },
  {
    id: 3,
    title: 'Project 3',
    picture: 'https://via.placeholder.com/150',
    content: 'This is a placeholder for project 3 content.',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 4,
    title: 'Project 4',
    picture: 'https://via.placeholder.com/150',
    content: 'This is a placeholder for project 4 content.',
    tags: ['HTML', 'SIO']
  },
  {
    id: 5,
    title: 'Project 5',
    picture: 'https://via.placeholder.com/150',
    content: 'This is a placeholder for project 5 content.',
    tags: ['React', 'Node.js']
  },
  {
    id: 6,
    title: 'Project 6',
    picture: 'https://via.placeholder.com/150',
    content: 'This is a placeholder for project 6 content.',
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