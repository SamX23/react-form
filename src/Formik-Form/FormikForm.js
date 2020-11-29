import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isValid: false,
  });

  const handleChange = (values) => {
    setData({
      userName: values.userName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "Username should be between 6 and 15 characters")
      .max(15, "Username should be between 6 and 15 characters")
      .required("Username is required"),
  });

  return (
    <div>
      <h3>Form with Formik & Yup</h3>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          isSubmitting: true,
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
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
