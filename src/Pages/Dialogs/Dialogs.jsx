import React from "react";
import s from "./Dialogs.module.css";
import Search from "../../components/Kit/Search/Search";
import DiaolgsItem from "./DiaolgsItem/DiaolgsItem";
import MessageFild from "./MessageField/MessageField";

const Dialogs = (props) => (
  <div className={s.dialogPage}>
    <div className={s.linkList}>
      <div className={s.serchModule}>
        <Search />
      </div>
      {props.usersInfo.map((u) => (
        <DiaolgsItem
          to={`/dialogs/${u.id}`}
          src={u.src}
          name={u.name}
        ></DiaolgsItem>
      ))}
    </div>

    <MessageFild usersInfo={props.usersInfo} />
  </div>
);

export default Dialogs;
