import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <a className="nav__link" href="#">
        Новости
      </a>
      <a className="nav__link" href="#">
        Стена
      </a>
      <a className="nav__link" href="#">
        Друзья
      </a>
      <a className="nav__link" href="#">
        Фотографии
      </a>
    </div>
  );
};

export default Navigation;
