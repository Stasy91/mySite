import React from "react";
import s from "./PinnedPost.module.css";
import AutorDataParth from "./AutorDataParth/AutorDataParth";

const PinnedPost = (props) => {
  return (
    <div className={s.pinnedPost}>
      <div>Привет</div>
      <AutorDataParth profileInfo={props.profileInfo} />
    </div>
  );
};

export default PinnedPost;
