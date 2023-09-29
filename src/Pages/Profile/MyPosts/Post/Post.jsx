import React, { useState } from "react";
import s from "./Post.module.css";
import CouterLike from "./CouterLike/CouterLike";
import Like from "../../../../components/Kit/Like/Like";

const Post = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div className={s.postReady}>
      <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg" alt="" />
      <div className={s.postReadyText}>{props.children}</div>
      {/* Счетчик лайков */}
      <div>
        <div>
          <CouterLike counter={count} />
        </div>
        <button
          style={{ outline: "none", border: "none", background: "transparent" }}
          onClick={increment}
        >
          <Like />
        </button>
      </div>
    </div>
  );
};

export default Post;
