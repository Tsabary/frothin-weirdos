import "./styles.scss";
import React, { useState, useContext } from "react";
import Moment from "react-moment";
import { connect } from "react-redux";

import { AuthContext } from "../../../providers/Auth";

import { addApplicationReply } from "../../../actions";

import InputField from "../../formComponents/inputField";
import SingleReply from "../singleReply";

const SingleComment = ({
  applicationReplies,
  application,
  comment,
  addApplicationReply
}) => {
  const { currentUserProfile } = useContext(AuthContext);
  const [reply, setReply] = useState("");

  const commentReplies = applicationReplies.filter(reply => {
    return reply.comment_ID === comment.id;
  });

  const compare = (a, b) => {
    if (a.timestamp.seconds > b.timestamp.seconds) return 1;
    if (b.timestamp.seconds > a.timestamp.seconds) return -1;

    return 0;
  };

  const renderReplies = () => {
    return !!commentReplies.length
      ? commentReplies.sort(compare).map(reply => {
          return <SingleReply reply={reply} key={reply.id} />;
        })
      : null;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!!reply.length)
      addApplicationReply(
        reply,
        comment.id,
        currentUserProfile.uid,
        currentUserProfile.name,
        currentUserProfile.avatar || "",
        setReply
      );
  };

  return (
    <div className="single-comment">
      <div className="round-image__container round-image__container--small">
        <img
          className="round-image"
          src={
            comment.author_avatar ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }
        />
      </div>
      <div>
        <div className="single-comment__body">
          <div className="single-comment__title">
            <p className="single-comment__author bold-700">{comment.author_name}</p>
            <Moment className="single-comment__date" fromNow>
              {comment.timestamp.seconds !== undefined
                ? comment.timestamp.seconds * 1000
                : Date.now()}
            </Moment>
          </div>
          <p className="single-comment__content">{comment.content}</p>
        </div>

        {!!commentReplies.length ? (
          <div className="single-comment__comments tiny-margin-top">
            {renderReplies()}
          </div>
        ) : null}

        <form
          onSubmit={handleSubmit}
          className="single-comment__reply-form tiny-margin-top"
        >
          <InputField
            placeHolder={"Reply to this comment"}
            label={"Add a reply"}
            onChange={setReply}
            value={reply}
          />

          <button className="text-button">Reply</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    applicationReplies: state.applicationReplies
  };
};

export default connect(mapStateToProps, { addApplicationReply })(SingleComment);
