import "./styles.scss";
import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

import SingleComment from "../../../socialComponents/singleComment";
import { AuthContext } from "../../../../providers/Auth";
import {
  addApplicationComment,
  approveApplication,
  declineApplication
} from "../../../../actions";
import InputField from "../../../formComponents/inputField";
import PopupButton from "../../../formComponents/popupButton";

const SingleApplication = ({
  application,
  addApplicationComment,
  applicationsComments,
  approveApplication,
  declineApplication
}) => {
  const { currentUserProfile } = useContext(AuthContext);
  const [comment, setComment] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!!comment.length)
      addApplicationComment(
        application.id,
        comment,
        currentUserProfile.uid,
        currentUserProfile.name,
        currentUserProfile.avatar || "",
        setComment
      );
  };

  const compare = (a, b) => {
    if (a.timestamp.seconds > b.timestamp.seconds) return 1;
    if (b.timestamp.seconds > a.timestamp.seconds) return -1;

    return 0;
  };

  const applicationComments = applicationsComments.filter(comment => {
    return comment.application_ID === application.id;
  });

  const renderComments = () => {
    return !!applicationComments.length
      ? applicationComments.sort(compare).map(comment => {
          return <SingleComment comment={comment} key={comment.id} />;
        })
      : null;
  };

  return (
    <div className="application">
      <div className="application__header small-margin-bottom">
        <div className="round-image__container  round-image__container--application">
          <img
            className="round-image clickable"
            src={application.avatar || "../../imgs/logo.jpg"}
          />
        </div>
        <div>
          <div className="application__application-time extra-tiny-margin-top">
            <span className="bold-900">Applied on: </span>
            <Moment fromNow>{application.application_time}</Moment>
          </div>
          <div className="application__name extra-tiny-margin-top">
            <span className="bold-900">Name: </span>
            {application.name}
          </div>

          <div className="application__personal-reference extra-tiny-margin-top">
            <span className="bold-900">Personal reference: </span>
            {application.personal_reference}
          </div>
        </div>
      </div>

      <div className="application__date-of-birth extra-tiny-margin-top">
        <span className="bold-900">Date of birth: </span>
        {application.date_of_birth}
      </div>

      <div className="application__playa-name extra-tiny-margin-top">
        <span className="bold-900">Playa name: </span>
        {application.playa_name}
      </div>

      <div className="application__camping-history-frothers extra-tiny-margin-top">
        <span className="bold-900">History with Frothing Weirdos: </span>
        {application.camping_history_frothers}
      </div>

      <div className="application__camping-history-others extra-tiny-margin-top">
        <span className="bold-900">History with other camps: </span>
        {application.camping_history_others}
      </div>

      <div className="application__number-of-burns extra-tiny-margin-top">
        <span className="bold-900">Number of burns: </span>
        {application.number_of_burns}
      </div>

      <div className="application__relevant-skills extra-tiny-margin-top">
        <span className="bold-900">Relevant skills: </span>
        {application.relevant_skills}
      </div>

      <div className="application__interests extra-tiny-margin-top">
        <span className="bold-900">Interests: </span>
        {application.interests}
      </div>

      <div className="application__email extra-tiny-margin-top">
        <span className="bold-900">Email: </span>
        {application.email}
      </div>

      <div className="application__actions small-margin-top">
        <div />
        <PopupButton
          popup={{
            trigger: "Decline",
            content:
              "Are you sure you want to decline this application? Sucks for that guy.",
            action: () => declineApplication(application.id)
          }}
        />

        <PopupButton
          popup={{
            trigger: "Approve",
            content:
              "You're about to approve this application! They better be awesome.",
            action: () => approveApplication(application.id)
          }}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="application__comment-form tiny-margin-top"
      >
        <InputField
          placeHolder={"Comment on this application"}
          label={"Add a comment"}
          onChange={setComment}
          value={comment}
        />

        <button className="text-button">Comment</button>
      </form>

      {!!applicationComments.length ? (
        <details>
          <summary>{applicationComments.length} comments</summary>
          <div className="application__comments tiny-margin-top">
            {renderComments()}
          </div>
        </details>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    applicationsComments: state.applicationsComments
  };
};

export default connect(mapStateToProps, {
  addApplicationComment,
  approveApplication,
  declineApplication
})(SingleApplication);
