import React from "react";
import './DropDown.css'
function DropDown() {
    return(
        <div className="dropdown">
          <button className="dropbtn"></button>
          <div className="dropdown-content">
          <a href="/profile">my profile</a>
          <a href="/invitations">invitations</a>
          <a href="/logout">log out</a>
          </div>
        </div>
    )
}

export default DropDown;