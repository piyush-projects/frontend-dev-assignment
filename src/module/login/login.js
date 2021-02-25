import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { doLogin } from "services/login/login";
import "./login.scss";

const Login = () => {
  let history = useHistory(); 
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    doLogin(userName, password).then((response) => {
      console.log(response);
      history.push("/movies");
    });
  };

  return (
    <div className="login_container">
      <div className="credentails">
        User Name:
        <input
          placeholder="User Name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="credentails">
        Password:
        <input
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="credentails">
        <button onClick={onLogin}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
