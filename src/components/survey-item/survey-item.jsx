import React from "react";
import { Link } from "react-router-dom";

const SurveyItem = ({ survey }) => {
  // let {
  //   survey,
  //   survey: { title },
  // } = this.props;
  return (
    <div className="SurveyItem">
      <Link to={"/"}>{survey.title}</Link>
    </div>
  );
};

export default SurveyItem;
