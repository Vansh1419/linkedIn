import React from "react";
import "./sidebar.style.scss";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
const SidebarComponent = () => {
  const user = useSelector(selectUser);
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        {topic}
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://picsum.photos/200/400" alt="" />
        <Avatar className="sidebar__avatar" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,321</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">4,321</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("ReactJs")}
        {recentItems("Programming")}
        {recentItems("Software Engineering")}
        {recentItems("Developer")}
      </div>
    </div>
  );
};

export default SidebarComponent;
