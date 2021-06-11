import { Avatar } from "@material-ui/core";
import {ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import React from "react";
import InputOption from "./InputOption";
import "./post.css";

function Post({ name, description, message, photourl }) {
  return (
    <div className="post">
      <div className="postheader">
        <Avatar />
        <div className="postinfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="postbody">
        <p>{message}</p>
      </div>
	  <div className="postbuttons">
		  <InputOption Icon={ThumbUpAltOutlined} title="like"
		  color="gray" />
		  		  <InputOption Icon={ChatOutlined} title="comment"
		  color="gray" />
		  		  <InputOption Icon={ShareOutlined} title="share"
		  color="gray" />
		  		  <InputOption Icon={SendOutlined} title="send"
		  color="gray" />
	  </div>
    </div>
  );
}

export default Post;
