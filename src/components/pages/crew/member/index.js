import "./styles.scss";
import React from "react";
import MemberPopup from "./memberPopup";

const Member = ({ member }) => {
  return (
    <div className="member">
      <div className="round-image__container round-image__container--profile-form small-margin-top small-margin-bottom">
        <img
          className="round-image round-image clickable"
          src={member.avatar || "../../imgs/logo.jpg"}
        />
      </div>
      <div className="member__info">
        <MemberPopup member={member} />

        <div className="member__country">{member.address}</div>
        <div className="social centered small-margin-top">
          {member.facebook ? (
            <a href={member.facebook} target="_blank">
              <svg className="social__icon social__icon--facebook">
                <use xlinkHref="./sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          ) : null}

          {member.instagram ? (
            <a
              href={"https://www.instagram.com/" + member.instagram}
              target="_blank"
            >
              <svg className="social__icon social__icon--instagram">
                <use xlinkHref="./sprite.svg#icon-instagram"></use>
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Member;
