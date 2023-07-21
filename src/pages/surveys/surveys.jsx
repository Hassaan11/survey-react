import React from "react";
import { Alert } from "react-bootstrap";
import Survey from "../../components/survey/survey";

const SurveyPage = (props) => {
  const survey = {
    title: "title",
    subtitle: "subtitle",
    questions: [
      {
        _id: "clkbbmjxj00003b6pkrbs2pec",
        type: "SINGLE_LINE_TEXT",
        title: "Untitled",
        placeholder: "ss",
      },
      {
        _id: "clkbbmnao00013b6p4rdcy0ol",
        type: "MULTI_CHOICE",
        title: "Select a choice",
        options: [
          {
            content: "First choice",
            _id: "clkbbmnao00023b6pzzbqv33v",
          },
          {
            content: "Second choice",
            _id: "clkbbmnao00033b6pykp9iz19",
          },
          {
            content: "Third choice",
            _id: "clkbbmnao00043b6plpw2r1bd",
          },
        ],
      },
      {
        _id: "clkbbo0m200003b6pr1ehqzi8",
        type: "CHECKBOXES",
        title: "Check All That Apply",
        options: [
          {
            content: "First choice",
            _id: "clkbbo0m200013b6pv20hpfcd",
          },
          {
            content: "Second choice",
            _id: "clkbbo0m200023b6pf373uelb",
          },
          {
            content: "Third choice",
            _id: "clkbbo0m200033b6p08ibpgzb",
          },
        ],
      },
    ],
  };

  return (
    <div className="container">
      {/* {this.props.survey.receive_results ? (
        ""
      ) : (
        <Alert bsStyle="danger">Do not collection result any more</Alert>
      )} */}
      <div className="row SurveyPage">
        <div className="col-md-8 offset-md-2 survey">
          <Survey survey={survey} />
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
