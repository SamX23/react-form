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

  return (
    <div>
      <h4>Form with Formik & Yup</h4>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          isSubmitting: true,
        }}
      >
        {({ children }) => (
          <form noValidate>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input type="text" className="form-control" name="userName" />
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
