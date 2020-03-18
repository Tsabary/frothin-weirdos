import "./styles.scss";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";

import SocialLinks from "./socialLinks";

const Contact = () => {
  const [copy, setCopy] = useState("Click to copy");

  return (
    <div className="contact">
      <h2>Trying to reach us?</h2>

      <div className="paragraph centered-text">
        Get in touch via email or contact us on our Social Media accounts
      </div>

      <CopyToClipboard
        text="frothinweirdos@gmail.com"
        data-tip
        data-for="email"
        onCopy={() => setCopy("Copied!")}
      >
        <div className="paragraph centered-text bold-700 clickable">
          frothinweirdos@gmail.com
        </div>
      </CopyToClipboard>
      <ReactTooltip id="email" type="dark" effect="solid">
        {copy}
      </ReactTooltip>

      <SocialLinks />

      <img
        src="../../../imgs/contact_page.jpg"
        className="banner small-margin-top"
      />
    </div>
  );
};

export default Contact;
