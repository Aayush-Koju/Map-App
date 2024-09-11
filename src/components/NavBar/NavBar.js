import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Search from "../Search/Search";
import Settings from "../Settings/Settings";
import Geocoding from "../GeoCoding/Geocoding";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-account">
          <img src="images/profile.avif" alt="profile" id="profile"></img>
          <p>Aayush Koju</p>
        </div>
        <div className="nav-item">
          <div className="nav-item-content">
            <img src="icons/direction.png" alt="direction"></img>
            <p>Direction</p>
          </div>
          <div className="nav-item-content">
            <Geocoding />
          </div>
          <div className="nav-item-content">
            <Settings />
          </div>
        </div>
        <div className="search-bar">
          <Search />
        </div>
      </nav>
    </>
  );
}
