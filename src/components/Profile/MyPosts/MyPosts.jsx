import React from "react";
import s from "./MyPosts.module.css";
import Textarea from "../../Kit/Textarea/Textarea";
import Button from "../../Kit/Button/Button";

const MyPosts = () => {
  return (
    <div className={s.postBox}>
      <div className={s.postTitle}>Новый пост</div>
      <div className={s.post_item}>
        <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"></img>
        <Textarea />
      </div>
      <div className={s.postFutter}>
        <Button>Поделиться</Button>
      </div>
    </div>
  );
};

export default MyPosts;
