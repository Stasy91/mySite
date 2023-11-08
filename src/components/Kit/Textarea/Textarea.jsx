import React from "react";
import s from "./Textarea.module.css";

<<<<<<< HEAD
const Textarea = (props = { value: "", changeValue: () => {} }) => {
=======
const Textarea = () => {
>>>>>>> parent of 84b214d... Merge pull request #11 from Stasy91/31-onClick-ref-VirtualDOM
  return (
    <div className={s.text_item}>
      <textarea>Я хочу рассказать вам</textarea>
    </div>
  );
};

export default Textarea;
