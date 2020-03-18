import "./styles.scss";
import React, { useState, useContext } from "react";
import { connect } from "react-redux";

import { AuthContext } from "../../../providers/Auth";

import SignUp from "../../forms/signUp/indexOld";
import LogIn from "../../forms/login/indexOld";
import ApplicationForm from "../../forms/applicationForm";
import UpdateProfile from "../../forms/updateProfile/indexold";

import BoxedButton from "../boxedButton";
import { logIn, signUp, applyToCamp, updateProfile } from "../../../actions";

const Popup = ({
  content,
  title,
  buttonText,
  logIn,
  signUp,
  applyToCamp,
  updateProfile
}) => {
  const { currentUserProfile } = useContext(AuthContext);

  const [values, setValues] = useState({});
  const [imageObj, setImageObj] = useState(null);

  const renderContent = () => {
    switch (true) {
      case content === "sign-up":
        return <SignUp setValues={setValues} values={values} />;

      case content === "log-in":
        return <LogIn setValues={setValues} values={values} />;

      case content === "application":
        return <ApplicationForm setValues={setValues} values={values} />;

      case content === "update-profile":
        return <UpdateProfile setValues={setValues} values={values} setImageObj={setImageObj} />;
    }
  };

  return (
    <div className="popup" id={content}>
      <a className="popup__close" href="#">
        Close
      </a>
      <div className="popup__container">
        <div className="popup__title">{title}</div>
        {renderContent()}
        <div className="popup__button medium-margin-top">
          <BoxedButton
            text={buttonText}
            action={() => {
              switch (content) {
                case "sign-up":
                  signUp(values.email, values.password, values.name);
                case "log-in":
                  logIn(values.email, values.password);
                case "application":
                  applyToCamp(values);

                case "update-profile":
                  updateProfile(values, currentUserProfile.uid, imageObj);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { signUp, logIn, applyToCamp, updateProfile })(
  Popup
);
