import { useState } from "react";
const Forms = () => {
  const [state, setState] = useState({
    username: "",
    usernameValid: false,
    email: "",
    password: "",
    passwordValid: false,
    passwordConfirm: "",
    passwordConfirmValid: false,
    errorMsg: {},
  });

  const validateUsername = () => {
    const { username } = state;
    let usernameValid = true;
    let errorMsg = { ...state.errorMsg };
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
            onChange={(e) => setState({ username: e.target.value })}
          />
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={state.email}
            onChange={(e) => setState({ email: e.target.value })}
          />
        </div>
        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={state.password}
            onChange={(e) => setState({ password: e.target.value })}
          />
        </div>
        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={state.passwordConfirm}
            onChange={(e) => setState({ passwordConfirm: e.target.value })}
          />
        </div>
      </form>
      <p>Username : {state.username}</p>
      <p>Email : {state.email}</p>
      <p>Password : {state.password}</p>
      <p>PasswordConfirm : {state.passwordConfirm}</p>
    </div>
  );
};

export default Forms;
