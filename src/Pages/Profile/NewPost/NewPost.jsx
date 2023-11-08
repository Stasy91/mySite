<<<<<<< HEAD
=======
import React from "react";
>>>>>>> parent of 84b214d... Merge pull request #11 from Stasy91/31-onClick-ref-VirtualDOM
import s from "./NewPost.module.css";
import Textarea from "../../../components/Kit/Textarea/Textarea";
import Button from "../../../components/Kit/Button/Button";

const NewPost = (props) => {
<<<<<<< HEAD
  let addPost = () => {
    props.addPost(props.newTextPost);
  };

=======
>>>>>>> parent of 84b214d... Merge pull request #11 from Stasy91/31-onClick-ref-VirtualDOM
  return (
    <div className={s.postBox}>
      <div className={s.postTitle}>Новый пост</div>
      <div className={s.post_item}>
        <img src={props.profileInfo.src} alt=""></img>
<<<<<<< HEAD
        <Textarea
          placeholder="Расскажи о"
          value={props.newTextPost}
          changeValue={(text) => {
            props.updateNewPostText(text);
          }}
        ></Textarea>
=======
        <Textarea />
>>>>>>> parent of 84b214d... Merge pull request #11 from Stasy91/31-onClick-ref-VirtualDOM
      </div>
      <div className={s.postFutter}>
        <Button>Поделиться</Button>
      </div>
    </div>
  );
};

export default NewPost;
