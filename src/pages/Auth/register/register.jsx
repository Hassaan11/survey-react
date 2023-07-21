import * as React from "react";
import { Formik } from "formik";

const RegisterForm = () => (
  <div className="col-sm-4 col-sm-offset-4 m-auto mt-5">
    <legend>Register</legend>
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (values.password !== values.confirmPassword) {
          errors.password = "Password and confirm password is not same";
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
            <label htmlFor="">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </div>
          <div className="form-group mt-2">
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
          <div className="form-group mt-2">
            <label htmlFor="">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
          </div>
          {errors.password && touched.password && errors.password}
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={isSubmitting}
          >
            Register
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default RegisterForm;
