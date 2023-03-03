import React from "react";
import "./headerOption.style.scss";
import { Avatar } from "@mui/material";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";

const HeaderOptionComponent = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  // console.log(user);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__avatar" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptionComponent;
