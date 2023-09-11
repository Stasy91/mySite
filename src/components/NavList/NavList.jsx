import React from "react";
import s from "./NavList.module.css";

const NavList = () => {
  return (
    <nav className={s.navlist}>
      <div className={s.designBar}>
        <div className={s.avatar}>
          <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"></img>
        </div>
        <div className={s.linestyle}>
          <a> Профиль </a>
        </div>
        <div className={s.linestyle}>
          <a>Новости</a>
        </div>
        <div className={s.linestyle}>
          <a>Сообщения</a>
        </div>
        <div className={s.linestyle}>
          <a>Контакты</a>
        </div>
      </div>
    </nav>
  );
};

export default NavList;
