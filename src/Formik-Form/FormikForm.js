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
        {({}) => (
          <form noValidate>
            <div></div>
            <label></label>
            <input />
          </form>
        )}
      </Formik>
    </div>
  );
}
