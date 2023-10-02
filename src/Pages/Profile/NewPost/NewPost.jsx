import React from "react";
import s from "./NewPost.module.css";
import Textarea from "../../../components/Kit/Textarea/Textarea";
import Button from "../../../components/Kit/Button/Button";

const NewPost = (props) => {
  return (
    <div className={s.postBox}>
      <div className={s.postTitle}>Новый пост</div>
      <div className={s.post_item}>
        <img src={props.profileInfo.src} alt=""></img>
        <Textarea />
      </div>
      <div className={s.postFutter}>
        <Button>Поделиться</Button>
      </div>
    </div>
  );
};

export default NewPost;
