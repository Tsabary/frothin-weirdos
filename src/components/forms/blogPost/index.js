// import "./styles.scss";
import React, { useState } from "react";

import InputField from "../../formComponents/inputField";
import RichTextEditor from "../../formComponents/richTextEditor";


const BlogPost = ({ values, setValues, setImageObj }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const myHandleImageChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setSelectedImage(URL.createObjectURL(image));
      setImageObj(image);
    }
  };

  const renderImage = () => {
    switch (true) {
      case !!selectedImage:
        return <img className="cover-image clickable" src={selectedImage} />;

      case !!values && !!values.image:
        return <img className="cover-image clickable" src={values.image} />;

      default:
        return (
          <div className="event-form__image-empty-1">
            <div className="event-form__image-empty-2">Pick a Pic</div>
          </div>
        );
    }
  };

  return (
    <div>
      <label htmlFor="image" className="new-event__label">
        <div className="new-event__image-container">
          <div className="cover-image__container">{renderImage()}</div>
        </div>
      </label>

      <input
        id="image"
        className="new-event__upload"
        type="file"
        onChange={myHandleImageChange}
      />

      <InputField
        type="text"
        placeHolder="Post title"
        value={values.title}
        onChange={title => setValues({ ...values, title })}
        label="Make it exciting"
      />

      <RichTextEditor
        onChange={content => setValues({ ...values, content })}
        value={!!values && values.content}
      />
    </div>
  );
};

export default BlogPost;
