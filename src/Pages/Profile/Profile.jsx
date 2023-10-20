import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import PinnedPost from "./PinnedPost/PinnedPost";

const Profile = (props) => {
  return (
    <div>
      <PinnedPost profileInfo={props.profileInfo} />
      <NewPost
        profileInfo={props.profileInfo}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newTextPost={props.newTextPost}
      />
      {props.posts.map((p) => (
        <Post
          text={p.textInPost}
          profileInfo={props.profileInfo}
          addPost={props.addPost}
        ></Post>
      ))}
    </div>
  );
};
export default Profile;
