import React from "react";
import s from "./MessageField.module.css";
import DataRecipient from "./DataRecipient/DataRecipient";

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

const MessageField = ({ dataDialog }) => {
  return (
    <div>
      <DataRecipient dataDialog={dataDialog} />
      <div className={s.dialogMessages}>
        <MessageUser message="Дарова" />
        <MessageRecipient message="Привет" />
      </div>
    </div>
  );
};

export default MessageField;
