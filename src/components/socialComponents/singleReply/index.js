import "./styles.scss";
import React, { useState, useContext } from "react";
import Moment from "react-moment";


const SingleReply = ({ reply }) => {

  return (
    <div className="single-reply">
      <div className="round-image__container round-image__container--small">
        <img
          className="round-image"
          src={
            reply.author_avatar ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }
        />
      </div>
      <div>
        <div className="single-reply__body">
          <div className="single-reply__title">
            <p className="single-reply__author bold-700">{reply.author_name}</p>
            <Moment className="single-reply__date" fromNow>
              {!!reply.timestamp.seconds
                ? reply.timestamp.seconds * 1000
                : Date.now()}
            </Moment>
          </div>
          <p className="single-reply__content">{reply.content}</p>
        </div>
    
      </div>
    </div>
  );
};



export default SingleReply;