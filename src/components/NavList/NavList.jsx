import React from "react";
import s from "./NavList.module.css";
// import { NavLink } from "react-router-dom";
import NavListItem from "./NavListItem/NavListItem";

const NavItem = [
  { to: "/profile", children: "Профиль" },
  { to: "/dialogs", children: "Сообщения" },
  { to: "/news", children: "Новости" },
  { to: "/friends", children: "Друзья" },
];

const NavList = (props) => {
  console.log({ props });
  return (
    <nav className={s.navlist}>
      <div className={s.designBar}>
        <div className={s.avatar}>
          <img src={props.profileInfo.src} alt=""></img>
        </div>

        <div className={s.designBarList}>
          {NavItem.map((NavItem) => (
            <NavListItem to={NavItem.to} key={NavItem.to}>
              {NavItem.children}
            </NavListItem>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavList;
