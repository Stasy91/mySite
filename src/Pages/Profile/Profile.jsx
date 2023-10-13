import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import PinnedPost from "./PinnedPost/PinnedPost";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <PinnedPost profileInfo={props.profileInfo} />
      <NewPost profileInfo={props.profileInfo} addPost={props.addPost} />
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
