import React from "react";
import SurveyItem from "../survey-item/survey-item";

const SurveyList = () => {
  const surveys = [{ title: "ABC" }, { title: "DEF" }];

  return (
    <div className="SurveyList row">
      <ul className="list-unstyled">
        {surveys.map((survey) => {
          return (
            <li key={survey._id} className="col-md-3">
              <SurveyItem survey={survey} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SurveyList;
