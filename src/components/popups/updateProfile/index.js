import "./styles.scss";
import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import { AuthContext } from "../../../providers/Auth";

import { updateProfile } from "../../../actions";

import InputField from "../../formComponents/inputField";
import TextArea from "../../formComponents/textArea";

const UpdateProfile = ({ updateProfile }) => {
  const [values, setValues] = useState({});
  const { currentUserProfile, currentUser } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageObj, setImageObj] = useState(null);
  const [submitting, setSubmitting] = useState(0);

  useEffect(() => {
    if (!!currentUserProfile) {
      setValues(currentUserProfile);
    }
  }, [currentUserProfile]);

  const handleImageChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setSelectedImage(URL.createObjectURL(image));
      setImageObj(image);
    }
  };

  const handleSelect = address => {
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
    setSubmitting(1);
    window.scrollTo(0, 0);
    updateProfile(values, currentUser, imageObj, setSubmitting);
  };

  const renderContent = state => {
    switch (state) {
      case 0:
        return (
          <>
            <div className="popup__title">Update your profile</div>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="update-profile-image"
                className="new-event__label"
              >
                <div className="round-image__container round-image__container--profile-form small-margin-top small-margin-bottom">
                  <img
                    className="round-image clickable"
                    src={
                      selectedImage ||
                      (currentUserProfile && currentUserProfile.avatar) ||
                      "../../imgs/logo.jpg"
                    }
                  />
                </div>
              </label>
              <input
                id="update-profile-image"
                className="update-profile__upload"
                type="file"
                onChange={handleImageChange}
              />

              <InputField
                type="text"
                placeHolder="Full name"
                value={values.name}
                onChange={name => setValues({ ...values, name })}
                label="Full name"
              />

              <InputField
                type="text"
                placeHolder="Playa name"
                value={values.playa_name}
                onChange={playa_name => setValues({ ...values, playa_name })}
                label="Playa name"
              />

              <InputField
                type="text"
                placeHolder="How many times have you gone to Burning Man?"
                value={values.number_of_burns}
                onChange={number_of_burns =>
                  setValues({
                    ...values,
                    number_of_burns: Number(number_of_burns.replace(/\D/, ""))
                  })
                }
                label="Number of burns"
              />

              <PlacesAutocomplete
                value={values.address || ""}
                onChange={address => setValues({ ...values, address })}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Where are you from?",
                        className: "input-field__input"
                      })}
                    />
                    <div className="places-autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#ebecf4", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className: "places-autocomplete",
                              style
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>

              <InputField
                type="text"
                placeHolder="Facebook profile"
                value={values.facebook}
                onChange={facebook => setValues({ ...values, facebook })}
                label="Facebook profile"
              />

              <InputField
                type="text"
                placeHolder="Instagram handle"
                value={values.instagram}
                onChange={instagram =>
                  setValues({
                    ...values,
                    instagram
                  })
                }
                label="Instagram handle"
              />

              <TextArea
                type="text"
                placeHolder="Tell us about some of your skills and hobbies! This isn't a job interview, its about you!"
                value={values.hobbies}
                onChange={hobbies => setValues({ ...values, hobbies })}
                label="Hobbies"
              />

              <TextArea
                type="text"
                placeHolder="How did you find your way to Frothin Weirdos? We take pride in the connections in our crew, tell us about yours!"
                value={values.story}
                onChange={story => setValues({ ...values, story })}
                label="Share your Frothin story"
              />

              <TextArea
                type="text"
                placeHolder="What events have you participated in with the Frothin family?"
                value={values.events}
                onChange={events => setValues({ ...values, events })}
                label="Past events"
              />

              <InputField
                type="text"
                placeHolder="What's your moto?"
                value={values.moto}
                onChange={moto => setValues({ ...values, moto })}
                label="What mantra guides you through life?"
              />

              <div className="popup__button medium-margin-top">
                <button type="submit" className="boxed-button">
                  Update profile
                </button>
              </div>
            </form>
          </>
        );

      case 1:
        return (
          <div className="centered">
            <Loader type="Grid" color="#1472FF" height={100} width={100} />
          </div>
        );

      case 2:
        return <div>Your profile was updated successfully</div>;
    }
  };

  return (
    <div className="popup" id="update-profile">
      <div className="popup__container">
        <a className="popup__close" href="#">
          <div />
          Close
        </a>
        {renderContent(submitting)}
      </div>
    </div>
  );
};

export default connect(null, { updateProfile })(UpdateProfile);
