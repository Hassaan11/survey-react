// @flow
import * as React from "react";

const MultiChoice = (props) => {
  const { title, options, _id } = props;
  return (
    <div>
      <h3 className="question-title">{title}</h3>
      <div className="mb-3">
        {options.map((option, index) => {
          return (
            <div key={index} className="radio">
              <label>
                <input type="radio" name={_id} value={option._id} />

                <span style={{ marginLeft: "5px" }}> {option.content}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiChoice;
