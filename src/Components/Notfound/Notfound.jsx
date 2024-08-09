import React from 'react';
import "./Notfound.css";
import NotfoundLogo from "../../Assets/dosomething-404.png";

const NotFound = () => {
  return (
    <div className="Logo-Notfound">
      <a href="/">
        <img src={NotfoundLogo} alt="Notfound-logo" />
      </a>
    </div>
  );
};

export default NotFound;