import React from "react";
import BoxedButton from "../../formComponents/boxedButton";
import { MyHighlight } from "../../../helpers/index";
const Donate = () => {
  return (
    <div className="donate">
      <div className="small-margin-bottom">
        <h2>Your Support is What Gets Us Going</h2>
      </div>

      <MyHighlight
        body="Your ongoing support is what makes the amazing growth of Frothin’
        Weirdos possible. While your Burning Man camp dues allow us to create a
        camp with basic amenities and small events, it’s the year- round
        fundraising and donations that have allowed us to grow bigger and better
        every year. Our frothin’ crew works year-round to bring all the events
        to life by donating their time, skills and effort however they’re able
        to. Our camp expenses grow as our vision grows and it’s thanks to the
        contributions from our community that has allowed us to keep expanding
        and upgrading. Your donations, large or small remind us why this all
        started in the first place and we’re so grateful for your continued
        support."
        items={[""]}
        style="paragraph centered-text"
      />

      <img src="../../../../imgs/donate.jpg" className="banner small-margin-bottom" />

      <MyHighlight
        body="Your generous donations help fund our efforts including:"
        items={[""]}
        style="paragraph centered-text"
      />

      <ul className="small-margin-bottom">
        <li className="li li-unstyled centered-text">
          Events (year-round and at Burning Man)
        </li>
        <li className="li li-unstyled centered-text">
          Infrastructure upgrades and maintenance
        </li>
        <li className="li li-unstyled centered-text">
          Sound equipment upgrades and maintenance
        </li>
        <li className="li li-unstyled centered-text">
          Local venue hire and décor
        </li>
        <li className="li li-unstyled centered-text">
          Ticketing, payment fees
        </li>
        <li className="li li-unstyled centered-text">
          Food &amp; alcohol gifting
        </li>
        <li className="li li-unstyled centered-text">
          Event and venue signage
        </li>
        <li className="li li-unstyled centered-text">
          Administration, website costs
        </li>
      </ul>
      <MyHighlight
        body="Help us keep frothin!"
        items={["Help us keep frothin!"]}
        style="paragraph centered-text"
      />

      <div className="centered">
        <BoxedButton text="Donate" />
      </div>
    </div>
  );
};

export default Donate;
