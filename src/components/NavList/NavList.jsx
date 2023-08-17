import React from "react";
import s from "./NavList.module.css";

const NavList = () => {
  return (
    <nav className={s.navlist}>
      <div className={s.linestyle}>
        <a> Profile </a>
      </div>
      <div className={s.linestyle}>
        <a>News</a>
      </div>
      <div className={s.linestyle}>
        <a>Message</a>
      </div>
      <div className={s.linestyle}>
        <a>Contacts</a>
      </div>
    </nav>
  );
};

export default NavList;
