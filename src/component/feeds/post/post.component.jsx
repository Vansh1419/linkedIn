import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUp,
} from "@mui/icons-material";
import InputOptionComponent from "../inputOption/inputOption.component";
import "./post.style.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
const PostComponent = forwardRef(
  ({ name, description, message, photoUrl }, ref) => {
    const user = useSelector(selectUser);
    return (
      <div className="post" ref={ref}>
        <div className="post__header">
          <Avatar src={user?.photoUrl}>{user?.email[0]}</Avatar>
          <div className="post__info">
            <h2>{user?.displayName}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOptionComponent Icon={ThumbUp} title="Like" color="gray" />
          <InputOptionComponent
            Icon={ChatOutlined}
            title="Comment"
            color="gray"
          />
          <InputOptionComponent
            Icon={ShareOutlined}
            title="Share"
            color="gray"
          />
          <InputOptionComponent Icon={SendOutlined} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default PostComponent;
