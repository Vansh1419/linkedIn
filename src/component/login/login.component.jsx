import React from "react";
import { auth } from "../../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/userSlice";
import "./login.style.scss";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          logIn({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  const register = () => {
    if (!name) {
      return alert("Please enter the full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoUrl: photoUrl,
        }).then(() => {
          dispatch(
            logIn({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoUrl,
            })
          );
          console.log(userAuth.user.photoURL);
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <img
        src="https://blog.waalaxy.com/wp-content/uploads/2021/01/logo-linkedin-2011.jpg"
        alt=""
      />
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          type="text"
          placeholder="Profile Url (Optional)*"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default LoginComponent;
