import React from "react";
import s from "./Search.module.css";
import Button from "../Button/Button";

function Search() {
  return (
    <div className={s.searches}>
      <input
        type="text"
        placeholder="Искать здесь..."
        className={s.searchBox}
      />
      <Button> Поиск </Button>
    </div>
  );
}
export default Search;
