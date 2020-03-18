import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

const SingleEvent = ({event}) => {
    console.log(event)
  return (
    <Link to={`/event/${event.id}`} className="event" key={event.id}>
      <div className="cover-image__container">
        <img className="cover-image" src={event.image} />
      </div>
      <div className="event__info">
        <div className="event__text">
          <div className="event__title">{event.title}</div>
          <div className="event__time-and-address">
            {event.time_hour}:{event.time_minute} {event.time_ampm} ∙{" "}
            {event.address}
          </div>
        </div>
        <div className="event__date">
          <div className="event__month">{event.month}</div>
          <div className="event__day">{event.day}</div>
        </div>
      </div>
    </Link>
  );
};

export default SingleEvent;
