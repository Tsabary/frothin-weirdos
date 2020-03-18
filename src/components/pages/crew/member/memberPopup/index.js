import "./styles.scss";
import React from "react";
import Popup from "reactjs-popup";
import { multipleParagraphs } from "../../../../../helpers";

export default ({ member }) => {
  return (
    <Popup
      trigger={<button className="member__name">{member.name}</button>}
      position="top center"
      contentStyle={{
        width: "50rem",
        borderRadius: "3rem",
        border: "none",
        outline: "none"
      }}
    >
      <div className="member-popup">
        {multipleParagraphs([
          {
            body: "Playa name: " + (member.playa_name || "N/A"),
            items: ["Playa name:"]
          },
          {
            body: "My moto: " + (member.moto || "N/A"),
            items: ["My moto:"]
          },
          {
            body: "Hobbies: " + (member.hobbies || "N/A"),
            items: ["Hobbies:"]
          },
          {
            body: "Camp introduction: " + (member.story || "N/A"),
            items: ["Camp introduction:"]
          }
        ])}
      </div>
    </Popup>
  );
};
