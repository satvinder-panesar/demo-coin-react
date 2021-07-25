import React from "react";
import { TextFieldTypes } from "./enums";

export type TextFieldProps = {
  type: TextFieldTypes;
  placeholder?: string;
};

const TextField: React.FC<TextFieldProps> = ({ type, placeholder }) => {
  return (
    <>
      {type === TextFieldTypes.Text && (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            aria-label={placeholder}
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>
        </div>
      )}
      {type === TextFieldTypes.Text && (
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      )}
    </>
  );
};

export default TextField;
