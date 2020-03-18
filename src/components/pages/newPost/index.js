import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


import { AuthContext } from "../../../providers/Auth";

import { newBlogPost } from "../../../actions";

import BlogPost from "../../forms/blogPost";

const NewBlogPost = ({ newBlogPost }) => {
  const { currentUserProfile } = useContext(AuthContext);

  const [values, setValues] = useState({});
  const [imageObj, setImageObj] = useState(null);
  const [posted, setPosted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    newBlogPost(
      {
        ...values,
        author_uid: currentUserProfile.uid,
        author_name: currentUserProfile.name
      },
      imageObj,
      setPosted
    );
  };

  return posted ? (
    <Redirect to="/blog" />
  ) : (
    <div className="new-blog-post">
      <h2>Publish a new blog post</h2>
      <form onSubmit={handleSubmit}>
        <BlogPost
          values={values}
          setValues={setValues}
          setImageObj={setImageObj}
        />

        <div className="centered medium-margin-top">
          <button type="submit" className="boxed-button">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};
export default connect(null, { newBlogPost })(NewBlogPost);
