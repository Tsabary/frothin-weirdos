import "./styles.scss";
import React, { useState } from "react";

import PlacesAutocomplete from "react-places-autocomplete";

import InputField from "../../formComponents/inputField";
import RichTextEditor from "../../formComponents/richTextEditor";
import TimeInput from "../../formComponents/timeInput";
import DateInput from "../../formComponents/dateInput";

const Event = ({ values, setValues, setImageObj, handleLocationSelect }) => {
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
      <label htmlFor="image" className="event-form__label">
        <div className="event-form__image-container">
          <div className="cover-image__container">{renderImage()}</div>
        </div>
      </label>

      <input
        id="image"
        className="event-form__upload"
        type="file"
        onChange={myHandleImageChange}
      />

      <InputField
        type="text"
        placeHolder="Event title"
        value={values.title}
        onChange={title => setValues({ ...values, title })}
        label="Make it exciting"
      />

      <RichTextEditor
        onChange={content => setValues({ ...values, content })}
        value={!!values && values.content}
      />

      <InputField
        type="text"
        placeHolder="Facebook event link"
        value={values.fb_event}
        onChange={fb_event => setValues({ ...values, fb_event })}
        label="Facebook event link"
      />

      <InputField
        type="text"
        placeHolder="Ticket purchase link"
        value={values.tickets_link}
        onChange={tickets_link => setValues({ ...values, tickets_link })}
        label="Ticket purchase link"
      />
      <div className="event-form__times">
        <DateInput
          valueMonth={values.month}
          onChangeMonth={month => setValues({ ...values, month })}
          valueDay={values.day}
          onChangeDay={day => setValues({ ...values, day })}
        />
        <TimeInput
          type="text"
          valueHour={values.time_hour}
          onChangeHour={time_hour => setValues({ ...values, time_hour })}
          valueMinute={values.time_minute}
          onChangeMinute={time_minute => setValues({ ...values, time_minute })}
          valueAmpm={values.time_ampm}
          onChangeAmpm={time_ampm => setValues({ ...values, time_ampm })}
        />
      </div>

      <PlacesAutocomplete
        value={values.address || ""}
        onChange={address => setValues({ ...values, address })}
        onSelect={handleLocationSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "What's the location?",
                // className: "location-search-input"
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
    </div>
  );
};

export default Event;
