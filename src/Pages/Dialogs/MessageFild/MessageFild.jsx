import React from "react";
import s from "./MessageFild.module.css";
import DataRecipient from "./DataRecipient/DataRecipient";
import { GetDialogById } from "../DialogData/DIALOG_DATA";
import { useNavigate, useParams } from "react-router-dom";

const MessageRecipient = (props) => {
  return (
    <div>
      <div className={s.messageRecipient}>{props.message}</div>
    </div>
  );
};

const MessageUser = (props) => {
  return (
    <div>
      <div className={s.messageUser}>{props.message}</div>
    </div>
  );
};

const MessageFild = () => {
  return (
    <div>
      <DataRecipient />
      <div className={s.dialogMessages}>
        <MessageUser message="Дарова" />
        <MessageRecipient message="Привет" />
      </div>
    </div>
  );
};

export default MessageFild;
