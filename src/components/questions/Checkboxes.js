import * as React from "react";

const MultipleChoice = (props) => {
  const { title, options, _id } = props;
  return (
    <div>
      <h3 className="question-title">{title}</h3>
      <div className="mb-3">
        {options.map((option, index) => {
          return (
            <div className="checkbox" key={index}>
              <label>
                <input type="checkbox" name={`${_id}[${option._id}]`} />

                <span style={{ marginLeft: "5px" }}> {option.content}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleChoice;
