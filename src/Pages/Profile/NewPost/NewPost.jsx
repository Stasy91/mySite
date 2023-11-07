import s from "./NewPost.module.css";
import Textarea from "../../../components/Kit/Textarea/Textarea";
import Button from "../../../components/Kit/Button/Button";

const NewPost = (props) => {
  let addPost = () => {
    props.addPost(props.newTextPost);
  };

  return (
    <div className={s.postBox}>
      <div className={s.postTitle}>Новый пост</div>
      <div className={s.post_item}>
        <img src={props.profileInfo.src} alt=""></img>
        <Textarea
          placeholder="Расскажи о"
          value={props.newTextPost}
          changeValue={(text) => {
            props.updateNewPostText(text);
          }}
        ></Textarea>
      </div>
      <div className={s.postFutter}>
        <Button onClick={addPost}>Поделиться</Button>
      </div>
    </div>
  );
};

export default NewPost;
