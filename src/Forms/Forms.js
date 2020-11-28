import { useState, useEffect } from "react";

function Forms() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    passwordConfirmValid: false,
    formValid: false,
    errorMsg: {},
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { username, email, password, passwordConfirm } = data;
    const value = e.target.value;
    const id = e.target.id;
    let errorMsg = { ...data.errorMsg };
    let usernameValid = true;
    let emailValid = true;
    let passwordValid = true;
    let passwordConfirmValid = true;

    if (id === "username" && (username.length < 6 || username.length > 15)) {
      usernameValid = false;
      errorMsg.username = "username should be 6 or more characters";
    }

    if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = "Invalid email format";
    }

    if (id === "password" && password.length < 8) {
      passwordValid = false;
      errorMsg.password = "Passwords should at least 8 characters";
    }

    if (id === "passwordConfirm" && password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = "Passwords do not match";
    }

    setData({
      ...data,
      [id]: value,
      usernameValid,
      emailValid,
      passwordValid,
      passwordConfirmValid,
      errorMsg,
      formValid:
        usernameValid && emailValid && passwordValid && passwordConfirmValid,
    });
  };
  const resetForm = (e) => {
    e.preventDefault();

    setData({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      usernameValid: false,
      emailValid: false,
      passwordValid: false,
      passwordConfirmValid: false,
      formValid: false,
      errorMsg: {},
    });
  };

  const ValidationMessage = ({ valid, message }) => {
    if (!valid) {
      return (
        <div className="alert-danger" role="alert">
          {message}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>React Standard Form</h1>
      <form>
        {/* username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={data.username}
            onChange={handleChange}
          />
          <span>
            <ValidationMessage
              valid={data.usernameValid}
              message={data.errorMsg.username}
            />
          </span>
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
          <span>
            <ValidationMessage
              valid={data.emailValid}
              message={data.errorMsg.email}
            />
          </span>
        </div>
        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
          <span>
            <ValidationMessage
              valid={data.passwordValid}
              message={data.errorMsg.password}
            />
          </span>
        </div>
        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            value={data.passwordConfirm}
            onChange={handleChange}
          />
          <span>
            <ValidationMessage
              valid={data.passwordConfirmValid}
              message={data.errorMsg.passwordConfirm}
            />
          </span>
        </div>

        <div className="btn-group">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!data.formValid}
          >
            Submit
          </button>
          <button className="btn btn-danger" onClick={resetForm}>
            resset
          </button>
        </div>
      </form>
      <p>Username : {data.username}</p>
      <p>Email : {data.email}</p>
      <p>Password : {data.password}</p>
      <p>PasswordConfirm : {data.passwordConfirm}</p>
    </div>
  );
}

export default Forms;
