import React from "react";
import s from "./InfoUserRecipient.module.css";
import { useParams } from "react-router-dom";

const InfoUserRecipient = (props) => {
  const { id } = useParams();

  let GetDialogById = (id = "") => {
    return props.usersInfo.find((i) => id == i.id);
  };

  if (!GetDialogById(id)) {
    return <div className={s.DataRecipient}>Начните диалог</div>;
  }
  GetDialogById(id);
  let indexId = GetDialogById(id).id - 1;

  return (
    <div className={s.DataRecipient}>
      <img src={props.usersInfo[indexId].src} />
      <h4>{props.usersInfo[indexId].name}</h4>
    </div>
  );
};

export default InfoUserRecipient;
