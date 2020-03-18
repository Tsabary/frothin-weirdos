import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { fetchSingleEvent, updateEvent } from "../../../actions";
import Event from "../../forms/event";

const EditEvent = ({ match, events, fetchSingleEvent, updateEvent }) => {
  //   const { currentUserProfile } = useContext(AuthContext);
  ///// Not sure if here - but needs to set a wal so only authorized users can edit listings
  const [values, setValues] = useState(null);
  const [imageObj, setImageObj] = useState(null);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    if (!!events.length) {
      events.map(element => {
        if (element.id === match.params.id) setValues(element);
      });
    } else {
      fetchSingleEvent(match.params.id, setValues);
    }
    window.scrollTo(0, 0);
  }, []);

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
    updateEvent(values, imageObj, setEdited);
  };

  return edited ? (
    <Redirect to="/events" />
  ) : (
    <div>
      <h2>Edit your item</h2>
      <form onSubmit={handleSubmit}>
        {!!values ? (
          <Event
            values={values}
            setValues={setValues}
            setImageObj={setImageObj}
            handleLocationSelect={handleLocationSelect}
          />
        ) : null}

        <div className="popup__button medium-margin-top">
          <button type="submit" className="boxed-button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps, { fetchSingleEvent, updateEvent })(
  EditEvent
);
