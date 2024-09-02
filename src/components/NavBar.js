import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

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
          <div>
            <img src="icons/history.png" alt="history"></img>
            <p>History</p>
          </div>
          <div>
            <img src="icons/save.png" alt="save"></img>
            <p>Saved</p>
          </div>
        </div>
        <div className="nav-icons">
          <div className="nav-icon">
            <img src="icons/notification.png" alt="notification"></img>
            <img src="icons/message.png" alt="messages"></img>
            <img src="icons/settings.png" alt="settings"></img>
          </div>
        </div>
      </nav>
    </>
  );
}
