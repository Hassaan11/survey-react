import * as React from "react";
import QuestionWrapper from "../question-wrapper/question-wrapper";

const Survey = (props) => {
  let { survey, handleSubmit } = props;

  let { title, subTitle, questions } = survey;

  // handleSubmit: (values, { props }) => {
  //   props.onSubmit(props.survey.id, values);
  // },

  return (
    <div className="Survey">
      <form onSubmit={handleSubmit}>
        <header>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </header>
        <ul className="list-unstyled">
          {questions.map((question) => {
            return (
              <li key={question._id}>
                <QuestionWrapper question={question} />
              </li>
            );
          })}
        </ul>
        <div className="form-group mb-3">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Survey;
