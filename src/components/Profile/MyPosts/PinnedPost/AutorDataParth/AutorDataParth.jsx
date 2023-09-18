import React from "react";
import s from "./AutorDataParth.module.css";
import IconBookmark from "../../../../Kit/Icon/IconBookmark/IconBookmark";
import FacebookIcon from "../../../../Kit/Icon/SocialmediaIcon/FacebookIcon/FacebookIcon";
import TwitterIcon from "../../../../Kit/Icon/SocialmediaIcon/TwitterIcon/TwitterIcon";
import GoogleIcon from "../../../../Kit/Icon/SocialmediaIcon/GoogleIcon/GoogleIcon";

const AutorDataParth = () => {
  return (
    <div className={s.autorData}>
      <div className={s.iconWrapper}>
        <IconBookmark />
      </div>
      <h2>Autor</h2>
      Jonas Duri
      <img src="https://mir-avatarok.3dn.ru/_si/0/03342719.jpg"></img>
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
