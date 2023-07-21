// @flow

import * as React from "react";
import { Field } from "formik";

const Dropdown = (props) => {
  const { title, options, _id } = props;
  return (
    <div>
      <h3 className="question-title">{title}</h3>
      <div className="form-group mb-3">
        <Field component="select" className="form-control" name={_id}>
          <option></option>
          {options.map((option, index) => {
            return (
              <option value={option._id} key={option._id}>
                {option.content}
              </option>
            );
          })}
        </Field>
      </div>
    </div>
  );
};

export default Dropdown;
