import React, { useEffect } from "react";
import "./App.css";
// import { onAuthStateChanged } from "firebase/auth";
import FeedComponent from "./component/feeds/feed.component";
import HeaderComponent from "./component/header/header.component";
import SidebarComponent from "./component/sidebar/sidebar.component";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut, selectUser } from "./features/userSlice";
import LoginComponent from "./component/login/login.component";
import { auth } from "./utils/firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          logIn({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  }, []);
  return (
    <div className="app">
      {/*Header */}
      <HeaderComponent />
      {!user ? (
        <LoginComponent />
      ) : (
        <div className="app__body">
          {/* App body */}
          <SidebarComponent />
          {/* Sidebar */}
          <FeedComponent />
          {/* Feed */}
          {/* Widges */}
        </div>
      )}
    </div>
  );
}

export default App;
