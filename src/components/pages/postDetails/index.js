import "./styles.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchSingleBlogPost } from "../../../actions";

const PostDetails = ({ match, blogPosts, fetchSingleBlogPost }) => {
  const [post, setPost] = useState({});

  const createMarkup = () => {
    return { __html: post.content };
  };

  useEffect(() => {
    if (!!blogPosts.length) {
      blogPosts.map(element => {
        if (element.id === match.params.id) setPost(element);
      });
    } else {
      fetchSingleBlogPost(match.params.id, setPost);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="event-details">
      <div className="event-details__title">{post.title}</div>
      <div className="event-details__header tiny-margin-top">
        <div className="event-details__side-info">
          {/*  <div className="event-details__date">
            <div className="event-details__month">{post.month}</div>
            <div className="event-details__day">{post.day}</div>
          </div>
          <div className="event-details__time-container">
            <div className="event-details__time">{post.time_hour}</div>
            <div className="event-details__time">{post.time_minute}</div>
            <div className="event-details__time">{post.time_ampm}</div>
          </div>
          <a href={post.fb_event} target="_blank">
            <svg className="event-details__icon event-details__icon--facebook">
              <use xlinkHref="../sprite.svg#icon-facebook"></use>
            </svg>
          </a>
          <a
            href={
              "http://www.google.com/maps/place/" +
              post.address_lat +
              "," +
              post.address_lng
            }
            target="_blank"
          >
            <svg className="event-details__icon event-details__icon--location-pin">
              <use xlinkHref="../sprite.svg#icon-location-pin"></use>
            </svg>
          </a>*/}
        </div>

        <div className="cover-image__container medium-margin-bottom">
          <img className="cover-image" src={post.image} />
        </div>
      </div>
      <div className="centered-text">
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    blogPosts: state.blogPosts
  };
};
export default connect(mapStateToProps, { fetchSingleBlogPost })(PostDetails);
