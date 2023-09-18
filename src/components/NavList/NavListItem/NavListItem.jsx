import React from "react";
import s from "./NavListItem.module.css";
import { NavLink } from "react-router-dom";

const defaultPropsList = { to: "", children: "" };

const NavListItem = (props = defaultPropsList) => {
  return (
    <NavLink
      to={props.to}
      className={(dataNavList) =>
        dataNavList.isActive ? `${s.lineStyle} ${s.active}` : s.lineStyle
      }
    >
      {props.children}
    </NavLink>
  );
};

export default NavListItem;
