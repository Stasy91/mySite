import React from "react";
import s from "./Dialogs.module.css";
import Search from "../Kit/Search/Search";
import DiaolgsItem from "./DiaolgsItem/DiaolgsItem";

const items = [
  {
    to: "/dialogs/1",
    src: "https://ouch-cdn2.icons8.com/iaSvWx81YYzXgkdlhtQ4VVYi3fojJIC9MGKvMf1yGKs/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTY5/LzIyYWNhYTcwLTI4/OTAtNGUwZC04ZGFj/LTI2ZmFmZDJjNzY2/YS5wbmc.png",
    children: "Сергей",
  },
  {
    to: "/dialogs/2",
    src: "https://ouch-cdn2.icons8.com/XHNV1rKR-EzAzFYwXh2fWkZos4PwE48i-3FH5YotVpk/rs:fit:368:331/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODUw/L2FlZGM0MGNkLTAy/YzYtNDI4OS1hYjI4/LTlmZDlmNTIyMTUw/Zi5wbmc.png",
    children: "Кирилл",
  },
  {
    to: "/dialogs/3",
    src: "https://ouch-cdn2.icons8.com/o7VVy0frBxTY_yRmbuc-ocHYQJ12f-Hcv_Q8daW1dLI/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzQ3/L2YyMzZhMzFmLTZm/YjYtNDk4OC1hY2Mw/LWUzNWMwMDMyMmU4/My5wbmc.png",
    children: "Гоша",
  },
];

const Dialogs = (props) => (
  <div className={s.dialogPage}>
    <div className={s.linkList}>
      <div className={s.serchModule}>
        <Search />
      </div>

      {items.map((item) => (
        <DiaolgsItem to={item.to} src={item.src}>
          {item.children}
        </DiaolgsItem>
      ))}
    </div>

    <div className={s.dialogMessages}>
      <div className={s.messageUser}>hi</div>
      <div className={s.message}>hello</div>
      <div className={s.messageUser}>how are you</div>
      <div className={s.message}></div>
    </div>
  </div>
);

export default Dialogs;
