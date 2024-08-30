import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-account">
          <img src="" alt="profile image"></img>
          <p>Aayush Koju</p>
        </div>
        <div className="nav-item">
          <div>
            <img src="icons/direction.png" alt="direction"></img>
            <p>Direction</p>
          </div>
          <div>
            <img src="" alt="profile image"></img>
            <p>Aayush Koju</p>
          </div>
          <div>
            <img src="" alt="profile image"></img>
            <p>Aayush Koju</p>
          </div>
          <div>
            <img src="" alt="profile image"></img>
            <p>Aayush Koju</p>
          </div>
        </div>
        <div className="nav-icons">
          <div className="nav-icon">
            <img src="" alt="icons"></img>
            <img src="" alt="icons"></img>
            <img src="" alt="icons"></img>
          </div>
        </div>
      </nav>
    </>
  );
}
