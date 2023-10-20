import React from "react";
import s from "./Textarea.module.css";

const Textarea = (props = { value: "", changeValue: () => {} }) => {
  return (
    <div className={s.text_item}>
      <textarea
        value={props.value}
        onChange={(e) => {
          const newValue = e.target.value;
          props.changeValue(newValue);
        }}
      ></textarea>
    </div>
  );
};

export default Textarea;
