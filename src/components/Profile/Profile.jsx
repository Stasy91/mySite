import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import CouterLike from "./MyPosts/Post/CouterLike/CouterLike";
import PinnedPost from "./MyPosts/PinnedPost/PinnedPost";

const Profile = () => {
  return (
    <div>
      <PinnedPost />
      <MyPosts />
      <Post>
        Не следует, однако забывать, что консультация с широким активом
        обеспечивает широкому кругу (специалистов) участие в формировании
        существенных финансовых и административных условий.
      </Post>
      <Post>
        Разнообразный и богатый опыт сложившаяся структура организации позволяет
        выполнять важные задания по разработке дальнейших направлений развития.{" "}
      </Post>
    </div>
  );
};
export default Profile;
