import React from "react";
import s from "./InfoUserRecipient.module.css";
import { useParams } from "react-router-dom";

const InfoUserRecipient = (props) => {
  const { id } = useParams();
  let getDialogById = (id = "") => {
    return props.usersInfo.find((i) => id == i.id);
  };

  let selectedUser = getDialogById(id);

  if (!selectedUser) {
    return <div className={s.DataRecipient}>Начните диалог</div>;
  } else {
    return (
      <div className={s.DataRecipient}>
        <img src={selectedUser.src} />
        <h4>{selectedUser.name}</h4>
      </div>
    );
  }
};

export default InfoUserRecipient;
