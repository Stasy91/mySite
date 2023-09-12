import React from "react";
import s from "./NavList.module.css";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <nav className={s.navlist}>
      <div className={s.designBar}>
        <div className={s.avatar}>
          <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"></img>
        </div>
        <div className={s.lineStyle}>
          <NavLink
            to="/profile"
            className={(dataNavList) =>
              dataNavList.isActive ? `${s.lineStyle} ${s.active}` : s.lineStyle
            }
          >
            Профиль
          </NavLink>
        </div>
        <div className={`${s.lineStyle} ${s.active}`}>
          <NavLink
            to="/dialogs"
            className={(dataNavList) =>
              dataNavList.isActive ? `${s.lineStyle} ${s.active}` : s.lineStyle
            }
          >
            Сообщения
          </NavLink>
        </div>
        <div className={s.lineStyle}>
          <NavLink
            to="/News"
            className={(dataNavList) =>
              dataNavList.isActive ? `${s.lineStyle} ${s.active}` : s.lineStyle
            }
          >
            Новости
          </NavLink>
        </div>
        <div className={s.lineStyle}>
          <NavLink
            to="/Friends"
            className={(dataNavList) =>
              dataNavList.isActive ? `${s.lineStyle} ${s.active}` : s.lineStyle
            }
          >
            Друзья
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavList;
