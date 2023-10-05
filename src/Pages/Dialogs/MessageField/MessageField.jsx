import React from "react";
import s from "./MessageField.module.css";
import InfoUserRecipient from "./InfoUserRecipient/InfoUserRecipient";

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

const MessageField = (props) => {
  return (
    <div>
      <InfoUserRecipient usersInfo={props.usersInfo} />
      <div className={s.dialogMessages}>
        <MessageUser message="Дарова" />
        <MessageRecipient message="Привет" />
      </div>
    </div>
  );
};

export default MessageField;
