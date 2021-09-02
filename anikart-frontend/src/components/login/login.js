import { useAuth } from "../auth/auth";
import { useHistory, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import "./login.css";

function Login() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  let signInHandler = ()=>{
    alert("signed in")
    auth.signin(() => {
      history.replace(from);
    });
  }

  return (
    <div className="card login-body">
      <div className="card-body h-100 p-0">
        <div className="row h-100 p-0 m-0">
          <div className="col-6 welcome-page h-100">
            <div className="welcome-page-text">
              <div className="welcome-page-main-text">
                <h1>Welcome Page</h1>
              </div>
              <div className="welcome-page-sub-text">
                <p>Sign in to</p>
                <p>Continue access</p>
              </div>
            </div>
          </div>
          <div className="col-6 sign-in-form p-5">
              <div className="sign-in-text mb-5">
                  <h1>Sign In</h1>
              </div>
              <div className="sign-in-input">
                  <div className="mb-3">
                    <label for="user-name" className="form-label">User Name</label>
                    <input type="email" className="form-control" id="user-name" placeholder="username" value={userName}/>
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="password" value={password}/>
                  </div>
                  <button className="btn btn-secondary btn-lg" onClick={signInHandler}>Sign In</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
