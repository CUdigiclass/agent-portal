import React, { useState } from "react";
import "./AgentLoginForm.css";
import {useDispatch} from "react-redux";
import { manualSignIn } from "../redux/slices/LoginAction";
// import AgentLogo from "../../asset/Black-Red.jpg";


const AgentLoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ userNamevalidataion, setUserNameValidation ] = useState(false);
  const [ userPasswordValidation, setPasswordValidation ] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    dispatch(manualSignIn())
  };

  return (
    <div className="login-form-container">
      {" "}
      <h2 className="agent-header">Agent Login</h2>{" "}
      <p className="agent-para">
        Hey,Enter your details to get sign in to your account
      </p>{" "}
      <form onSubmit={handleLogin}>
        {" "}
        <div className="form-group">
          <label htmlFor="username">Username:</label>{" "}
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onMouseDown={(e) => setUserNameValidation(true)}
          />{" "}
          { username.length === 0 && userNamevalidataion ? <p style={{ color:"red", padding:"0px"}}>User Name is Required </p> : ""}
        </div>{" "}
        <div className="form-group">
          <label htmlFor="password">Password:</label>{" "}
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onMouseDown={(e) => setPasswordValidation(true)}
          />{" "}
          { password.length === 0 && userPasswordValidation ? <p style={{ color:"red", padding:"0px"}}>User Password is Required </p> : ""}
        </div>
        <button type="submit">Login</button>{" "}
      </form>{" "}
    </div>
  );
};

export default AgentLoginForm;
