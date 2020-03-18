import "./styles.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  fetchCampApplications,
  fetchApplicationsComments,
  fetchApplicationsReplies
} from "../../../actions";
import SingleApplication from "./singleApplication";

const CampApplications = ({
  campApplications,
  fetchCampApplications,
  fetchApplicationsComments,
  fetchApplicationsReplies
}) => {
  const [section, setSection] = useState({ title: "New", code: 1 });

  useEffect(() => {
    fetchCampApplications();
    fetchApplicationsComments();
    fetchApplicationsReplies();
  }, []);

  const renderCampApplications = section => {
    const sectionApplication = campApplications.filter(application => {
      return application.status === section.code;
    });

    return !!sectionApplication.length ? (
      sectionApplication.map(application => {
        return (
          <SingleApplication application={application} key={application.id} />
        );
      })
    ) : (
      <div className="empty-feed small-margin-top centered-text">
        No applictions waiting
      </div>
    );
  };

  return (
    <div className="events">
      <h2>Camp Applications</h2>

      <div className="flex-group-spaced">
        <div
          className={
            section.title === "New"
              ? "applications__section applications__section--active"
              : "applications__section applications__section--unactive"
          }
          onClick={() => setSection({ title: "New", code: 1 })}
        >
          New
        </div>
        <div
          className={
            section.title === "Approved"
              ? "applications__section applications__section--active"
              : "applications__section applications__section--unactive"
          }
          onClick={() => setSection({ title: "Approved", code: 2 })}
        >
          Approved
        </div>
        <div
          className={
            section.title === "Declined"
              ? "applications__section applications__section--active"
              : "applications__section applications__section--unactive"
          }
          onClick={() => setSection({ title: "Declined", code: 3 })}
        >
          Declined
        </div>
      </div>

      <div className="events__upcoming-feed medium-margin-top">
        {renderCampApplications(section)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campApplications: state.campApplications
  };
};

export default connect(mapStateToProps, {
  fetchCampApplications,
  fetchApplicationsComments,
  fetchApplicationsReplies
})(CampApplications);
