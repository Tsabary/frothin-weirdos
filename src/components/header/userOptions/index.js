import "./styles.scss";
import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../providers/Auth";

import { logOut, resendVerification } from "../../../actions";

import TextButton from "../../formComponents/textButton";

const UserOptions = ({ logOut, resendVerification }) => {
  const { currentUserProfile, currentUser } = useContext(AuthContext);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (!!currentUserProfile && currentUserProfile.roles)
      setRoles(currentUserProfile.roles);
  }, [currentUserProfile]);

  return (
    <div className="user-options ">
      <div className="user-options__visible">
        <div className="user-options__name">
          {!!currentUserProfile ? currentUserProfile.name : currentUser.email}
        </div>
        <div className="user-options__image-container">
          <img
            className="user-options__image"
            src={
              (currentUserProfile && currentUserProfile.avatar) ||
              "../../../imgs/logo.jpg"
            }
          />
        </div>
      </div>

      <div className="user-options__options">
        {roles.includes("admin") ? (
          <Link to="/new-event" className="user-options__option">
            <TextButton text="New event" />
          </Link>
        ) : null}

        {roles.includes("writer") ? (
          <Link to="/new-post" className="user-options__option">
            <TextButton text="New blog post" />
          </Link>
        ) : null}

        {roles.includes("admin") ? (
          <Link to="/camp-applications" className="user-options__option">
            <TextButton text="View camp applications" />
          </Link>
        ) : null}

        {currentUser.emailVerified ? (
          <a className="user-options__option" href="#update-profile">
            <TextButton text="Edit profile" />
          </a>
        ) : (
          <TextButton
            text="Resend email verification"
            onClick={resendVerification}
          />
        )}

        <div className="user-options__option" onClick={() => logOut()}>
          <TextButton text="Logout" />
        </div>
      </div>
    </div>
  );
};
export default connect(null, { logOut, resendVerification })(UserOptions);
