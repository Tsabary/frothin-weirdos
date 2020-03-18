import "./styles.scss";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Member from "./member";

import { fetchCrewMembers } from "../../../actions";

const Crew = ({ crewMembers, fetchCrewMembers }) => {
  useEffect(() => {
    fetchCrewMembers();
  }, []);

  const renderCrewMembers = () => {
    return crewMembers.map(member => {
      return <Member member={member} key={member.uid}/>;
    });
  };

  return (
    <div className="crew">
      <h2>Crew</h2>
      <div className="crew__feed medium-margin-top">{renderCrewMembers()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    crewMembers: state.crewMembers
  };
};

export default connect(mapStateToProps, { fetchCrewMembers })(Crew);
