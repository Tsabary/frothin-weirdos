import React from "react";

const SocialLinks = () => {
  return (
    <div className="social centered">
      <a href="https://www.facebook.com/frothinweirdos" target="_blank">
        <svg className="social__icon social__icon--facebook">
          <use xlinkHref="./sprite.svg#icon-facebook"></use>
        </svg>
      </a>
      <a href="https://www.instagram.com/frothinweirdos/" target="_blank">
        <svg className="social__icon social__icon--instagram">
          <use xlinkHref="./sprite.svg#icon-instagram"></use>
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
