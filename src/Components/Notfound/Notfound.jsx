import React from 'react';
import "./Notfound.css";
import NotfoundLogo from "../../Assets/dosomething-404.webp";

const NotFound = () => {
  return (
    <div className="Logo-Notfound">
      <a href="/">
        <img src={NotfoundLogo} alt="Notfound-logo" loading='lazy' />
      </a>
    </div>
  );
};

export default NotFound;