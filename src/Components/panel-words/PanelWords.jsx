import React, { useState, useEffect } from 'react';
import './PanelWords.css'; // Assurez-vous d'importer le fichier CSS

const PanelWords = () => {
  const messages = [
    "Pour vous",
    "Pour vos projets",
    "Pour votre entreprise",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
      }, isAdding ? 500 : 3000); // Adjust pause duration as needed
    } else {
      if (isAdding) {
        if (currentMessage.length < messages[currentMessageIndex].length) {
          timeout = setTimeout(() => {
            setCurrentMessage(messages[currentMessageIndex].slice(0, currentMessage.length + 1));
          }, 100);
        } else {
          setIsAdding(false);
          setIsPaused(true);
        }
      } else {
        if (currentMessage.length > 0) {
          timeout = setTimeout(() => {
            setCurrentMessage(messages[currentMessageIndex].slice(0, currentMessage.length - 1));
          }, 50);
        } else {
          setIsAdding(true);
          setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
          setIsPaused(true);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [currentMessage, isAdding, currentMessageIndex, isPaused]);

  return (
    <div className='intro--panel'>
      <h1 className="intro--message">{currentMessage}</h1>
    </div>
  );
};

export default PanelWords;