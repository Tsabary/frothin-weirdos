import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../providers/Auth";

import { updateBlogPost, fetchSingleBlogPost } from "../../../actions";

import BlogPost from "../../forms/blogPost";

const EditBlogPost = ({
  match,
  blogPosts,
  updateBlogPost,
  fetchSingleBlogPost
}) => {
  const { currentUserProfile } = useContext(AuthContext);

  const [values, setValues] = useState(null);
  const [imageObj, setImageObj] = useState(null);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    if (!!blogPosts.length) {
      blogPosts.map(element => {
        if (element.id === match.params.id) setValues(element);
      });
    } else {
      fetchSingleBlogPost(match.params.id, setValues);
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    updateBlogPost(values, imageObj, setEdited);
  };

  return edited ? (
    <Redirect to="/blog" />
  ) : (
    <div className="new-blog-post">
      <h2>Update this post</h2>
      <form onSubmit={handleSubmit}>
        {!!values ? (
          <BlogPost
            values={values}
            setValues={setValues}
            setImageObj={setImageObj}
          />
        ) : null}
        <div className="centered medium-margin-top">
          <button type="submit" className="boxed-button">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    blogPosts: state.blogPosts
  };
};

export default connect(mapStateToProps, {
  updateBlogPost,
  fetchSingleBlogPost
})(EditBlogPost);
