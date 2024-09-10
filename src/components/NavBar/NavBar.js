import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Search from "../Search/Search";
import Settings from "../Settings/Settings";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-account">
          <img src="images/profile.avif" alt="profile" id="profile"></img>
          <p>Aayush Koju</p>
        </div>
        <div className="nav-item">
          <div>
            <img src="icons/direction.png" alt="direction"></img>
            <p>Direction</p>
          </div>
          <div>
            <img src="icons/favourite.png" alt="favourite"></img>
            <p>Favourite</p>
          </div>
          <Settings />
        </div>
        <div className="search-bar">
          <Search />
        </div>
      </nav>
    </>
  );
}
