import "./styles.scss";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBlogPosts } from "../../../actions";
import BlogEntry from "./blogEntry";

const Blog = ({ blogPosts, fetchBlogPosts }) => {
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const renderBlogPosts = () => {
    return blogPosts.map(post => {
      return <BlogEntry post={post} />;
    });
  };

  return (
    <div className="events">
      <h2>Blog Posts</h2>

      {!!blogPosts.length ? (
        <div className="events__upcoming-feed medium-margin-top">
          {renderBlogPosts()}
        </div>
      ) : (
        <div className="empty-feed small-margin-top centered">
          Nothing to see here
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    blogPosts: state.blogPosts
  };
};

export default connect(mapStateToProps, { fetchBlogPosts })(Blog);
