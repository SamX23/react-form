import { useState, useEffect } from "react";

function Forms() {
  const [state, setState] = useState({
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
    const { username, email, password, passwordConfirm } = state;
    const value = e.target.value;
    const id = e.target.id;
    let errorMsg = { ...state.errorMsg };
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

    setState({
      ...state,
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

    setState({
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
            value={state.username}
            onChange={handleChange}
          />
          <span>
            <ValidationMessage
              valid={state.usernameValid}
              message={state.errorMsg.username}
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
            value={state.email}
            onChange={handleChange}
          />
          <span>
            <ValidationMessage
              valid={state.emailValid}
              message={state.errorMsg.email}
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
            value={state.password}
            onChange={handleChange}
          />
          <span>
            <ValidationMessage
              valid={state.passwordValid}
              message={state.errorMsg.password}
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
            value={state.passwordConfirm}
            onChange={handleChange}
          />
          <span>
            <ValidationMessage
              valid={state.passwordConfirmValid}
              message={state.errorMsg.passwordConfirm}
            />
          </span>
        </div>

        <div className="btn-group">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!state.formValid}
          >
            Submit
          </button>
          <button className="btn btn-danger" onClick={resetForm}>
            resset
          </button>
        </div>
      </form>
      <p>Username : {state.username}</p>
      <p>Email : {state.email}</p>
      <p>Password : {state.password}</p>
      <p>PasswordConfirm : {state.passwordConfirm}</p>
    </div>
  );
}

export default Forms;
