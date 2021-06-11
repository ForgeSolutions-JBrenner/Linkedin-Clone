import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import icon from "./jmblogo.svg";
import "./header.css";
import HeaderOption from "./HeaderOption";
import {Home, People, Notifications, Work, Message} from '@material-ui/icons'

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={icon} alt="" />
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div>
	  </div>
      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={People} title="Networking" />
		<HeaderOption Icon={Work} title="Jobs" />
		<HeaderOption Icon={Message} title="Messaging" />
		<HeaderOption Icon={Notifications} title="Notifications" />
		<HeaderOption avatar="https://d1.awsstatic.com/webteam/homepage/editorials/Site-Merch_Lightsail_Editorial.f3b6112b81a2512198937a63bc1d23381df43bcb.png" title="Justin"/>
	  </div>
    </div>
  );
}

export default Header;
