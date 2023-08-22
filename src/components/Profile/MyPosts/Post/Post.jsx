import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.postReady}>
      <img src="https://mir-avatarok.3dn.ru/_si/0/92302704.jpg" alt="" />
      <div className={s.postReadyText}>{props.children}</div>
    </div>
  );
};

export default Post;
