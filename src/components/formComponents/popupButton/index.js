import "./styles.scss";
import React from "react";
import Popup from "reactjs-popup";

export default ({ popup }) => {
  return (
    <Popup
      trigger={
        <button className="popup-button__trigger">{popup.trigger}</button>
      }
      position="top center"
      contentStyle={{
        width: "max-content",
        borderRadius: "3rem",
        border: "none",
        outline: "none"
      }}
    >
      <div className="popup-button__content">
        {popup.content}
        <div className="popup-button__action" onClick={popup.action}>
          Yes
        </div>
      </div>
    </Popup>
  );
};
