import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DiaolgsItem.module.css";

// props={to src children}
const defaultProps = { to: "", src: "", children: "" };

const DiaolgsItem = (props = defaultProps) => {
  return (
    <NavLink
      to={props.to}
      className={(Link) =>
        Link.isActive ? `${s.link} ${s.active}` : `${s.link}`
      }
    >
      <img src={props.src} alt="" />
      {props.children}
    </NavLink>
  );
};

export default DiaolgsItem;
