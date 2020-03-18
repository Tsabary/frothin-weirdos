import "./styles.scss";
import React, { useState } from "react";
import { connect } from "react-redux";

import { newsletterSignup } from "../../../actions";
import SocialLinks from "../contact/socialLinks";

const Home = ({ newsletterSignup }) => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    newsletterSignup(email, setSent);
  };

  return (
    <div className="about">
        <img src='../../../../imgs/home_page.jpg' className="banner medium-margin-bottom"/>


      {/* <div className="home__divider" /> */}

      <div className="newsletter__container">
        {sent ? (
          <div>You're in! Get ready for some frothin' inbox magic.</div>
        ) : (
          <div>
            <div className="newsletter__title">Sign Up to our Frothin' Newsletter</div>

            <form className="newsletter__content" onSubmit={handleSubmit}>
              <input
                className="newsletter__input"
                type="email"
                placeholder="Email"
                autoComplete="new-password"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <button type="submit" className="boxed-button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="medium-margin-top">
        <SocialLinks />
      </div>
    </div>
  );
};

export default connect(null, { newsletterSignup })(Home);
