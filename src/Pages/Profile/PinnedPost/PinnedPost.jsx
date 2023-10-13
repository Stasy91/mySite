import React from "react";
import s from "./PinnedPost.module.css";
import AutorDataParth from "./AutorDataParth/AutorDataParth";
import PhotosTextPost from "./PhotosTextPost/PhotosTextPost";

const PinnedPost = (props) => {
  return (
    <div className={s.pinnedPost}>
      <PhotosTextPost />
      <AutorDataParth profileInfo={props.profileInfo} />
    </div>
  );
};

export default PinnedPost;
