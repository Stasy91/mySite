import React from "react";
import "./NavList.css"

const NavList = () => {
    return   <nav className="navlist">
    <div>
      <a className="linestyle" href="">
        Profile
      </a>
    </div>
    <div>
      <a className="linestyle" href="">
        News
      </a>
    </div>
    <div>
      <a className="linestyle" href="">
        Message
      </a>
    </div>
    <div>
      <a className="linestyle" href="">
        Contacts
      </a>
    </div>
  </nav>
}

export default NavList