import { Popup } from "semantic-ui-react";
import React, { Fragment } from "react";
export default function FormField(props) {
  return (
    <Fragment>
      <span className={props.labelClassName}>{props.labelName}</span>
      <Popup
        trigger={
          <div
            className={`ui huge fluid input ${
              props.errorVisible ? "error" : ""
            }`}
          >
            <input
              name={props.inputName}
              type={props.inputType}
              value={props.inputValue}
              onChange={props.handleInputChange}
            />
          </div>
        }
        open={props.popupVisible}
        content={props.popupContent}
        position="right center"
      />
    </Fragment>
  );
}
