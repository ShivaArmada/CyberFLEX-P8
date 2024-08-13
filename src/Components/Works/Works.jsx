import React from 'react';
import './Works.css';
import Sard from "../../Assets/MiniSardocheRobot.png";





const dataAbout = [
  {
    id: 1,
    title: 'Project 1',
    picture: {Sard},
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
    id: 6,
    title: 'Project 3',
    picture: 'https://via.placeholder.com/150',
    content: 'This is a placeholder for project 6 content.',
    tags: ['Node.js', 'Express', 'MongoDB']
  }
];

const Works = () => {
  return (
    <div className="works--container">
      {dataAbout.map((project) => (
        <div key={project.id} className="whoami">
          <h2>{project.title}</h2>
            <img src={project.picture} alt={project.title} />
          <p>{project.content}</p>
          <div className="tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;