import React from "react";
import s from "./AutorDataParth.module.css";
import IconBookmark from "../../../../../components/Kit/Icon/IconBookmark/IconBookmark";
import FacebookIcon from "../../../../../components/Kit/Icon/SocialmediaIcon/FacebookIcon/FacebookIcon";
import TwitterIcon from "../../../../../components/Kit/Icon/SocialmediaIcon/TwitterIcon/TwitterIcon";
import GoogleIcon from "../../../../../components/Kit/Icon/SocialmediaIcon/GoogleIcon/GoogleIcon";
import PROFILE_INFO from "../../../../../stores/PROFILE_INFO/PROFILE_INFO";

const AutorDataParth = () => {
  return (
    <div className={s.autorData}>
      <div className={s.iconWrapper}>
        <IconBookmark />
      </div>
      <h2>Автор</h2>
      <div> {`${PROFILE_INFO[0].name} ${PROFILE_INFO[0].surname}`}</div>
      <img src={PROFILE_INFO[0].src} />
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
