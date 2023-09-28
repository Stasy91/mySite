import React from "react";
import s from "./Dialogs.module.css";
import Search from "../../components/Kit/Search/Search";
import DiaolgsItem from "./DiaolgsItem/DiaolgsItem";
import MessageFild from "./MessageFild/MessageFild";
import DIALOG_DATA from "./DialogData/DIALOG_DATA";

const Dialogs = (props) => (
  <div className={s.dialogPage}>
    <div className={s.linkList}>
      <div className={s.serchModule}>
        <Search />
      </div>
      {DIALOG_DATA.map((item) => (
        <DiaolgsItem to={`/dialogs/${item.id}`} src={item.src}>
          {item.children}
        </DiaolgsItem>
      ))}
    </div>
    <MessageFild />
  </div>
);

export default Dialogs;
