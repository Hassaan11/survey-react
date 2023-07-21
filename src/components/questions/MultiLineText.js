// @flow

import * as React from "react";

const MultiLineText = (props) => {
  const { title, placeholder, _id } = props;
  return (
    <div>
      <h3 className="question-title">{title}</h3>
      <div className="form-group mb-3">
        <textarea
          className="form-control"
          name={_id}
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};

export default MultiLineText;
