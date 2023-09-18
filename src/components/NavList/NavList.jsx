import React from "react";
import s from "./NavList.module.css";
import { NavLink } from "react-router-dom";
import NavListItem from "./NavListItem/NavListItem";

const NavItem = [
  { to: "/profile", children: "Профиль" },
  { to: "/dialogs/", children: "Сообщения" },
  { to: "/news", children: "Новости" },
  { to: "/friends", children: "Друзья" },
];

const NavList = () => {
  return (
    <nav className={s.navlist}>
      <div className={s.designBar}>
        <div className={s.avatar}>
          <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"></img>
        </div>

        <div className={s.designBarList}>
          {NavItem.map((NavItem) => (
            <NavListItem to={NavItem.to}>{NavItem.children}</NavListItem>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavList;
