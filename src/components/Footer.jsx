import "../styles/FooterStyle.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={24} style={{ color: "white", marginRight: "2rem" }} />

            <div>
              <p>02, Purani Colony</p>
              <p>Nirmal Fibre Pvt Ltd </p>
              <p>Gajraula , UP, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={24}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +919717371868
            </h4>
          </div>
          <div className="gmail">
            <h4>
              <FaMailBulk
                size={24}
                style={{ color: "white", marginRight: "2rem" }}
              />
              shubhamtiwari5100@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Us</h4>
          <p>
            I am Shubham Tiwari. I am currently serving in ISKCON as a web
            developer and class coordinator
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />

            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaYoutube
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
