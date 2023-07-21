import * as React from "react";
import { Formik } from "formik";

const LoginForm = () => (
  <div className="col-sm-4 offset-sm-4 m-auto mt-5">
    <legend>Login</legend>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          {errors.email && touched.email && errors.email}
          <div className="form-group mt-2">
            <label htmlFor="">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          {errors.password && touched.password && errors.password}
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={isSubmitting}
          >
            Login
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
