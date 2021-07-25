import React from "react";
import { AlertTypes } from "../UI/components/enums";
import Alert from "../UI/components/Alert";

export type AlertMessageProps = {
  type: AlertTypes;
  message: string;
};

const AlertMessage: React.FC<AlertMessageProps> = ({ type, message }) => {
  return <Alert type={type} message={message} />;
};

export default AlertMessage;
