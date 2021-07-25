import AlertMessage from "./AlertMessage";
import { AlertTypes } from "../UI/components/enums";
import React from "react";

export type alertMessageType = {
  type: AlertTypes;
  message: string;
};

const Header: React.FC = () => {
  const alertMessages: Array<alertMessageType> = [
    {
      type: AlertTypes.Primary,
      message: "A simple crypto coin application implemented using blockchain."
    },
    {
      type: AlertTypes.Secondary,
      message: "Basic version of mining and chain formation is performed."
    },
    {
      type: AlertTypes.Secondary,
      message: "Fill the below details to add a block:"
    }
  ];

  return (
    <>
      {alertMessages.map((alertMessage, index) => (
        <AlertMessage
          type={alertMessage.type}
          key={`message${index}`}
          message={alertMessage.message}
        />
      ))}
    </>
  );
};

export default Header;
