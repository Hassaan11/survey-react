// @flow

import * as React from "react";

const MultipleChoice = (props) => {
  const { title, options, name, questions, id } = props;
  return (
    <div>
      <h3 className="question-title">{title}</h3>
      <div className="form-group mb-3">
        <table className="table table-striped table-hover table-bordered matrix">
          <thead>
            <tr>
              <td></td>
              {options.map((option, idx) => {
                return <td key={option.id}>{option.content}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {questions.map((question, idx) => {
              return (
                <tr key={question.id}>
                  <td>{question.content}</td>
                  {options.map((option, idx) => {
                    return (
                      <td key={option.id}>
                        <label className="form-radio">
                          <input
                            type="radio"
                            name={`${id}[${question.id}]`}
                            value={option.id}
                          />
                          <i className="form-icon"></i>
                        </label>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MultipleChoice;
