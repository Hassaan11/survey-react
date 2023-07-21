import * as React from "react";

const SingleLineText = (props) => {
  const { title, placeholder, _id } = props;
  return (
    <div>
      <h3 className="question-title">{title}</h3>
      <div className="form-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder={placeholder}
          name={_id}
        />
      </div>
    </div>
  );
};

export default SingleLineText;
