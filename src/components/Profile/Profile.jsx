import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import PinnedPost from "./MyPosts/PinnedPost/PinnedPost";

const PostData = [
  {
    children:
      "Разнообразный и богатый опыт сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития.",
  },
  {
    children:
      "Не следует, однако забывать, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.",
  },
];

const Profile = () => {
  return (
    <div>
      <PinnedPost />
      <MyPosts />

      {PostData.map((item) => (
        <Post>{item.children}</Post>
      ))}
    </div>
  );
};
export default Profile;
