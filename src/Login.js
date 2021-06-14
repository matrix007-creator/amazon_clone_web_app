import React, { useState } from "react";
import "./Login.css";
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history =useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth)=>{
        history.push('/')

    })
    .catch((error) => alert(error.message));
    //firebase config for authentication
  };
  const register = (e) => {
    //firebase config for registration
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth)
        {
            history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/home">
        <img
          className="loginLogo"
          src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
        />
      </Link>
      <div className="loginContainer">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Pasword</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginSigninButton" type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's_clone Conditions of Use and
          Privacy Notice.
        </p>

        <small>Dont have an account:</small>
        <button className="loginRegisterButton" onClick={register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
