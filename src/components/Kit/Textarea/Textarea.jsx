import React from "react";
import s from "./Textarea.module.css";

const Textarea = (props = { value: "", changeValue: () => {} }) => {
  return (
    <div className={s.text_item}>
      <textarea>Я хочу рассказать вам</textarea>
    </div>
  );
};

export default Textarea;
