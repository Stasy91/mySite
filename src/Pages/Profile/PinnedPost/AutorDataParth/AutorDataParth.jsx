import React from "react";
import s from "./AutorDataParth.module.css";
import IconBookmark from "../../../../components/Kit/Icon/IconBookmark/IconBookmark";
import FacebookIcon from "../../../../components/Kit/Icon/SocialmediaIcon/FacebookIcon/FacebookIcon";
import TwitterIcon from "../../../../components/Kit/Icon/SocialmediaIcon/TwitterIcon/TwitterIcon";
import GoogleIcon from "../../../../components/Kit/Icon/SocialmediaIcon/GoogleIcon/GoogleIcon";

const AutorDataParth = (props) => {
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
    </div>
  );
};
export default AutorDataParth;
