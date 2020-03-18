import "./styles.scss";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchEvents } from "../../../actions";
import SingleEvent from "./singleEvent";

const Events = ({ events, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, []);

  const renderEvents = () => {
    return events.map(event => {
      return <SingleEvent event={event} key={event.id}/>
    });
  };

  return (
    <div className="events">
      <h2>Upcoming Events</h2>

      {!!events.length ? (
        <div className="events__upcoming-feed medium-margin-top">
          {renderEvents()}
        </div>
      ) : (
        <div className="empty-feed small-margin-top centered">
          Nothing to see here
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(mapStateToProps, { fetchEvents })(Events);
