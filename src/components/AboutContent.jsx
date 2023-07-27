import "../styles/AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a react front-end developer. I create responsive secure websites
          for my clients.{" "}
        </p>

        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-WyDvde6vRSwRk1xr6oqNg.png"
              alt="ReactDevelper"
              className="img"
            />
          </div>
          <div className="img-stack bottom">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="ReactDeveloping"
              className="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
