import "./styles.scss";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { newEvent } from "../../../actions";

import Event from "../../forms/event";

const NewEvent = ({ newEvent }) => {
  const [values, setValues] = useState({});
  const [imageObj, setImageObj] = useState(null);
  const [posted, setPosted] = useState(false);

  const handleLocationSelect = address => {
    setValues({ ...values, address });

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        setValues({
          ...values,
          address,
          address_lat: latLng.lat,
          address_lng: latLng.lng
        });
      })
      .catch(error => console.error("Error", error));
  };

  const handleSubmit = event => {
    event.preventDefault();
    newEvent({ ...values, publish_time: Date.now() }, imageObj, setPosted);
  };

  return posted ? (
    <Redirect to="/events" />
  ) : (
    <div className="new-event">
      <h2>Launch a new event</h2>
      <form onSubmit={handleSubmit}>
        <Event
          values={values}
          setValues={setValues}
          setImageObj={setImageObj}
          handleLocationSelect={handleLocationSelect}
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
export default connect(null, { newEvent })(NewEvent);
