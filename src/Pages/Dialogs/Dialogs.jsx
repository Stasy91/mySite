import React from "react";
import s from "./Dialogs.module.css";
import Search from "../../components/Kit/Search/Search";
import DiaolgsItem from "./DiaolgsItem/DiaolgsItem";
import MessageFild from "./MessageField/MessageField";

const Dialogs = ({ dataDialog = [] }) => (
  <div className={s.dialogPage}>
    <div className={s.linkList}>
      <div className={s.serchModule}>
        <Search />
      </div>
      {dataDialog.map((di) => (
        <DiaolgsItem
          to={`/dialogs/${di.id}`}
          src={di.src}
          name={di.name}
        ></DiaolgsItem>
      ))}
    </div>
    <MessageFild dataDialog={dataDialog} />
  </div>
);

export default Dialogs;
