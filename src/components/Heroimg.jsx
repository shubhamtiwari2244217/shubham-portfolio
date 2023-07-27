import "../styles/HeroimgStyle.css";
import { Link } from "react-router-dom";
import bgintro from "../assets/intro-bg.png";

import React from "react";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={bgintro} alt="bgintro" className="intro-img" />
      </div>
      <div className="content">
        <p>Hare Krishna, I am a </p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
