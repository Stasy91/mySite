import React from "react";
import s from "./PinnedPost.module.css";
import AutorDataParth from "./AutorDataParth/AutorDataParth";

const PinnedPost = () => {
  return (
    <div className={s.pinnedPost}>
      <div>Привет</div>
      <AutorDataParth />
    </div>
  );
};

export default PinnedPost;
