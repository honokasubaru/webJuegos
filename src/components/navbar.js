import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaGripLines } from "react-icons/fa";
import "./styles/navbar.css";
import userPic from "../media/foto.png";
import logoPic from "../media/logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar shadow-sm">
        <div className="container-fluid ">
          <div className="row">
            <div className="Navbar__logoTriangle"></div>
            <div className="Navbar__logoContainer">
              <img src={logoPic} alt="zone-crack" title="zone-crack" />
            </div>
            <div className="col ml-auto">
              <button className="Btn__gripLines">
                <FaGripLines className="gripLines" />
              </button>
            </div>
            <div className="col-md-3 mr-5 text-right">
              <a
                className="Social__links"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="Social__logo" />
              </a>
              <a
                className="Social__links ml-3 "
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="Social__logo" />
              </a>

              <a href="/">
                <button className="Btn__navLink font-weight-bold">
                  INICIO
                </button>
              </a>
            </div>
            <div className="col-md-3 ml-5">
              <a href="/pcgames">
                <button className="Btn__navLink font-weight-bold">
                  JUEGOS PC
                </button>
              </a>
              <a
                className="Social__links mr-3"
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="Social__logo" />
              </a>
              <a
                className="Social__links"
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="Social__logo" />
              </a>
            </div>
            <div className="col mr-auto d-flex justify-content-end">
              <button className="Btn__user">
                Username
                <img
                  className="User__avatar"
                  src={userPic}
                  alt="username"
                  title="username"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
