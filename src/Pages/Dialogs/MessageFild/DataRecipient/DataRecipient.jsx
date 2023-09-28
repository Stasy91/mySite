import React from "react";
import s from "./DataRecipient.module.css";
import DiaolgsItem from "../../DiaolgsItem/DiaolgsItem";
import DialogData, { GetDialogById } from "../../DialogData/DIALOG_DATA";
import { useParams } from "react-router-dom";

const DataRecipient = () => {
  const { id } = useParams();

  if (!GetDialogById(id)) {
    return <div className={s.DataRecipient}></div>;
  }
  return (
    <div className={s.DataRecipient}>
      <img src={GetDialogById(id).src} />
      <h4>{GetDialogById(id).children}</h4>
    </div>
  );
};

export default DataRecipient;
