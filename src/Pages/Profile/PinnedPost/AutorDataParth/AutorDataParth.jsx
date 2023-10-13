import React, { useState } from "react";
import s from "./AutorDataParth.module.css";
import IconBookmark from "../../../../components/Kit/Icon/IconBookmark/IconBookmark";
import FacebookIcon from "../../../../components/Kit/Icon/SocialmediaIcon/FacebookIcon/FacebookIcon";
import TwitterIcon from "../../../../components/Kit/Icon/SocialmediaIcon/TwitterIcon/TwitterIcon";
import GoogleIcon from "../../../../components/Kit/Icon/SocialmediaIcon/GoogleIcon/GoogleIcon";
import CouterLike from "../../CouterLike/CouterLike";
import Like from "../../../../components/Kit/Like/Like";

const AutorDataParth = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className={s.autorData}>
      <div className={s.iconWrapper}>
        <IconBookmark />
      </div>
      <h2>Автор</h2>
      <div> {`${props.profileInfo.name} ${props.profileInfo.surname}`}</div>
      <img src={props.profileInfo.src} alt="" />
      <div className={s.iconDesign}>
        <FacebookIcon />
      </div>
      <div className={s.iconDesign}>
        <TwitterIcon />
      </div>
      <div className={s.iconDesign}>
        <GoogleIcon />
      </div>
      <div className={s.counterLikes}>
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
export default AutorDataParth;
