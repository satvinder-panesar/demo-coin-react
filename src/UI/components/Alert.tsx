import React from "react";
import { AlertTypes } from "./enums";

export type AlertProps = {
  type: AlertTypes;
  message: string;
};

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <>
      {type === AlertTypes.Primary && (
        <div className="alert alert-primary" role="alert">
          {message}
        </div>
      )}
      {type === AlertTypes.Secondary && (
        <div className="alert alert-secondary" role="alert">
          {message}
        </div>
      )}
    </>
  );
};

export default Alert;
