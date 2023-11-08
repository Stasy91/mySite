import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import PinnedPost from "./PinnedPost/PinnedPost";

const Profile = (props) => {
  return (
    <div>
      <PinnedPost profileInfo={props.profileInfo} />
<<<<<<< HEAD
      <NewPost
        profileInfo={props.profileInfo}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newTextPost={props.newTextPost}
      />
=======
      <NewPost profileInfo={props.profileInfo} />
>>>>>>> parent of 84b214d... Merge pull request #11 from Stasy91/31-onClick-ref-VirtualDOM
      {props.posts.map((p) => (
        <Post text={p.textInPost} profileInfo={props.profileInfo}></Post>
      ))}
    </div>
  );
};
export default Profile;
