import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p> {topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1597346950233-63070b03462b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9yc2UlMjBzdGFsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Justin Brenner</h2>
        <h4>justin.brenner@.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statnum">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on your post</p>
          <p className="sidebar_statnum">5,000</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent </p>
        {recentItem("react js")}
		{recentItem("javascript")}
		{recentItem("software")}
		{recentItem("stryker")}
      </div>
    </div>
  );
}

export default Sidebar;
