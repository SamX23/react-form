import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isValid: false,
  });

  // const handleChange = (values) => {
  //   setData({
  //     userName: values.userName,
  //     email: values.email,
  //     password: values.password,
  //     confirmPassword: values.confirmPassword,
  //   });
  // };

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "Username should be between 6 and 15 characters")
      .max(15, "Username should be between 6 and 15 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password don't match"
    ),
  });

  return (
    <div>
      <h3>Form with Formik & Yup</h3>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          isSubmitting: true,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            setData({
              userName: values.userName,
              email: values.email,
              password: values.password,
              confirmPassword: values.confirmPassword,
            });
            setSubmitting(true);
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleReset,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} noValidate>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
              <span className="help-block text-danger">
                {errors.userName && touched.userName && errors.userName}
              </span>
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className="help-block text-danger">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span className="help-block text-danger">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <span className="help-block text-danger">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </span>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <button
                className="btn btn-danger"
                type="button"
                disabled={!dirty}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </Formik>
      <p>Username : {data.userName}</p>
      <p>Email : {data.email}</p>
      <p>Password : {data.password}</p>
      <p>Confirm Password : {data.confirmPassword}</p>
    </div>
  );
}
