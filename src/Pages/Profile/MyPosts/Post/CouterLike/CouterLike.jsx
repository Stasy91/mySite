import React from "react";
import s from "./CouterLike.module.css";

const CouterLike = (props) => {
  return (
    <div className={s.counterStyle} onClick={props.onClick}>
      {props.counter}
    </div>
  );
};

export default CouterLike;
