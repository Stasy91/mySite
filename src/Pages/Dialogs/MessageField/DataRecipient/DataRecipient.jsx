import React from "react";
import s from "./DataRecipient.module.css";
import { useParams } from "react-router-dom";

const DataRecipient = ({ dataDialog }) => {
  const { id } = useParams();

  let GetDialogById = (id = "") => {
    return dataDialog.find((i) => id == i.id);
  };

  if (!GetDialogById(id)) {
    return <div className={s.DataRecipient}></div>;
  }
  return (
    <div className={s.DataRecipient}>
      <img src={GetDialogById(id).src} />
      <h4>{GetDialogById(id).name}</h4>
    </div>
  );
};

export default DataRecipient;
