import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import "./login.css";
import icon from "./jmblogo.svg";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [profpic, setprofpic] = useState("");
  const dispatch = useDispatch();

  const logintoapp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(userauth => {
        dispatch(
          login({
            email: userauth.user.email,
            uid: userauth.user.uid,
            displayName: userauth.displayName,
            photoURL: userauth.photoURL,
          })
        );
      }).catch(error => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a Full Name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userauth) => {
        userauth.user
          .updateProfile({
            displayName: name,
            photoURL: profpic,
          })
          .then(() => {
            dispatch(
              login({
                email: userauth.user.email,
                uid: userauth.user.uid,
                displayName: name,
                photoURL: profpic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img src={icon} alt="logo" />

      <form>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Full name required"
          type="text"
        />
        <input
          value={profpic}
          onChange={(e) => setprofpic(e.target.value)}
          placeholder="profile picture (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="enter your email address"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="enter a password"
          type="password"
        />
        <button type="submit" onClick={logintoapp}>Sign In</button>
      </form>
      <p>
        Not a member? <span className="login_register" onClick={register}>Register Now! </span>
      </p>
    </div>
  );
}

export default Login;
