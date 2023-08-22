import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
  return <button className={s.Button}>{props.children}</button>;
};

export default Button;
