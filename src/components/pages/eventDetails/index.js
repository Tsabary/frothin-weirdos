import "./styles.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchSingleEvent } from "../../../actions";

const EventDetails = ({ match, events, fetchSingleEvent }) => {
  const [event, setEvent] = useState({});

  const createMarkup = () => {
    return { __html: event.content };
  };

  useEffect(() => {
    if (events.length > 0) {
      events.map(element => {
        if (element.id === match.params.id) setEvent(element);
      });
    } else {
      fetchSingleEvent(match.params.id, setEvent);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="event-details">
      <div className="event-details__title">{event.title}</div>
      {!!event.tickets_link ? (
        <a
          className="event-details__buy-tickets centered"
          href={event.tickets_link}
          target="_blank"
        >
          BUY TICKETS NOW!
        </a>
      ) : null}

      <div className="event-details__header tiny-margin-top">
        <div className="event-details__side-info">
          <div className="event-details__date">
            <div className="event-details__month">{event.month}</div>
            <div className="event-details__day">{event.day}</div>
          </div>
          <div className="event-details__time-container">
            <div className="event-details__time">{event.time_hour}</div>
            <div className="event-details__time">{event.time_minute}</div>
            <div className="event-details__time">{event.time_ampm}</div>
          </div>
          <a href={event.fb_event} target="_blank">
            <svg className="event-details__icon event-details__icon--facebook">
              <use xlinkHref="../sprite.svg#icon-facebook"></use>
            </svg>
          </a>
          <a
            href={
              "http://www.google.com/maps/place/" +
              event.address_lat +
              "," +
              event.address_lng
            }
            target="_blank"
          >
            <svg className="event-details__icon event-details__icon--location-pin">
              <use xlinkHref="../sprite.svg#icon-location-pin"></use>
            </svg>
          </a>
        </div>
        <div className="cover-image__container medium-margin-bottom">
          <img className="cover-image" src={event.image} />
        </div>
      </div>
      <div className="centered-text">
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    events: state.events
  };
};
export default connect(mapStateToProps, { fetchSingleEvent })(EventDetails);
