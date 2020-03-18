import React from "react";
import { Link } from "react-router-dom";

const BlogEntry = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="post" key={post.id}>
      <div className="cover-image__container">
        <img className="cover-image" src={post.image} />
      </div>
      <div className="post__text">
        <div className="post__title">{post.title}</div>
        <div className="post__author">By {post.author_name}</div>
      </div>
    </Link>
  );
};

export default BlogEntry;
