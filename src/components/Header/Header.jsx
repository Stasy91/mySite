import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header className={s.bighead}>
      <div className="container">
        <div className={s.header__inner}>
          <a className={s.headerLogo} href="#">
            <Logo />
          </a>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
