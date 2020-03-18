import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { AuthContext } from "../../../providers/Auth";

import InputField from "../../formComponents/inputField";
import TextArea from "../../formComponents/textArea";

import { applyToCamp } from "../../../actions";

const ApplicationForm = ({ applyToCamp }) => {
  const [values, setValues] = useState({});
  const { currentUserProfile, currentUser } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(0);

  useEffect(() => {
    if (!!currentUserProfile) {
      setValues({
        avatar: currentUserProfile.avatar,
        name: currentUserProfile.name,
        email: currentUser.email
      });
    }
  }, [currentUserProfile]);

  const handleSubmit = event => {
    event.preventDefault();
    window.scrollTo(0, 0);
    setSubmitting(1);

    applyToCamp({ ...values, application_time: Date.now() }, setSubmitting);
  };

  const renderContent = state => {
    switch (state) {
      case 0:
        return (
          <>
            <div className="popup__title">Apply to Our Camp</div>
            <form onSubmit={handleSubmit}>
              <InputField
                type="text"
                placeHolder="Full name"
                value={values.name}
                onChange={name => setValues({ ...values, name })}
                label="Full name"
              />

              <InputField
                type="email"
                placeHolder="Email Address - the one you actually check"
                value={values.email}
                onChange={email => setValues({ ...values, email })}
                label="Email"
              />

              <InputField
                type="text"
                placeHolder="Playa name"
                value={values.playa_name}
                onChange={playa_name => setValues({ ...values, playa_name })}
                label="Playa name"
              />

              <InputField
                type="text"
                placeHolder="Personal Reference (name of an existing camp member you know)"
                value={values.personal_reference}
                onChange={personal_reference =>
                  setValues({ ...values, personal_reference })
                }
                label="Personal Reference (name of an existing camp member you know)"
              />

              <InputField
                type="text"
                placeHolder="Date of birth (dd/mm/yyyy) "
                value={values.date_of_birth}
                onChange={date_of_birth =>
                  setValues({ ...values, date_of_birth })
                }
                label="Date of birth"
              />

              <TextArea
                type="text"
                placeHolder="Have you camped with us before? If so, when?"
                value={values.camping_history_frothers}
                onChange={camping_history_frothers =>
                  setValues({ ...values, camping_history_frothers })
                }
                label="Camping history with Frothin' Weirdos"
              />

              <TextArea
                type="text"
                placeHolder="Have you camped anywhere else before? If so, with who and when was it?"
                value={values.camping_history_others}
                onChange={camping_history_others =>
                  setValues({ ...values, camping_history_others })
                }
                label="Camping history with others"
              />

              <InputField
                type="text"
                placeHolder="How many times have you gone to Burning Man?"
                value={values.number_of_burns}
                onChange={number_of_burns =>
                  setValues({
                    ...values,
                    number_of_burns: Number(number_of_burns.replace(/\D/, ""))
                  })
                }
                label="Number of burns"
              />

              <TextArea
                type="text"
                placeHolder="Tell us about some useful relevant skills you might have (building, bartending, electrical etc.)"
                value={values.relevant_skills}
                onChange={relevant_skills =>
                  setValues({ ...values, relevant_skills })
                }
                label="Relevant skills"
              />

              <TextArea
                type="text"
                placeHolder="Tell us what you're into; what are your interests and talents (singing, dancing, djing, environmental issues etc.)"
                value={values.interests}
                onChange={interests => setValues({ ...values, interests })}
                label="What are you into"
              />

              <InputField
                type="text"
                placeHolder="What's your job/trade/profession?"
                value={values.job}
                onChange={job => setValues({ ...values, job })}
                label="What's your job/trade/profession?"
              />

              <InputField
                type="text"
                placeHolder="Have you ever worked with food before? If so what level of experience?"
                value={values.food}
                onChange={food => setValues({ ...values, food })}
                label="Have you ever worked with food before? If so what level of experience?"
              />

              <InputField
                type="text"
                placeHolder="Have you worked in a bar before? If so what level of experience?"
                value={values.bar}
                onChange={bar => setValues({ ...values, bar })}
                label="Have you worked in a bar before? If so what level of experience?"
              />

              <InputField
                type="text"
                placeHolder="Have you read and fully understand the principles and responsibilities we expect you to adhere to?"
                value={values.principles}
                onChange={principles => setValues({ ...values, principles })}
                label="Have you read and fully understand the principles and responsibilities we expect you to adhere to?"
              />
              <div className="popup__button medium-margin-top">
                <button type="submit" className="boxed-button">
                  Submit
                </button>
              </div>
            </form>
          </>
        );

      case 1:
        return (
          <div className="centered">
            <Loader type="Grid" color="#1472FF" height={100} width={100} />
          </div>
        );

      case 2:
        return (
          <div>We've received your application! We'll be in touch soon.</div>
        );
    }
  };

  return (
    <div className="popup" id="application">
      <div className="popup__container">
        <a className="popup__close" href="#">
          <div /> Close
        </a>
        {renderContent(submitting)}
      </div>
    </div>
  );
};

export default connect(null, { applyToCamp })(ApplicationForm);
