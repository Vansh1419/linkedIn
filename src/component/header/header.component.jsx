import React from "react";
import "./header.style.scss";
import HeaderOptionComponent from "./headerOption/headerOption.component";
import {
  BusinessCenter,
  Chat,
  Home,
  SupervisorAccount,
  Search,
  Notifications,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/userSlice";
import { auth } from "../../utils/firebase";
const HeaderComponent = () => {
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logOut());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="myImage"
        />
        <div className="header__search">
          {/*material icon*/}
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptionComponent Icon={Home} title="Home" />
        <HeaderOptionComponent Icon={SupervisorAccount} title="My Network" />
        <HeaderOptionComponent Icon={BusinessCenter} title="Jobs" />
        <HeaderOptionComponent Icon={Chat} title="Chat" />
        <HeaderOptionComponent Icon={Notifications} title="Notification" />
        <HeaderOptionComponent
          avatar={true}
          onClick={logOutOfApp}
          title="Me"
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
