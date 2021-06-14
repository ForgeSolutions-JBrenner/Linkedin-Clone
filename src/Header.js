import React from "react";
import {useDispatch} from 'react-redux';
import SearchIcon from "@material-ui/icons/Search";
import icon from "./jmblogo.svg";
import "./header.css";
import HeaderOption from "./HeaderOption";
import {Home, People, Info, Receipt, Notifications} from '@material-ui/icons'
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const logoutofapp = () => {
    dispatch(logout())
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src={icon} alt="" />
      {/* <div className="header_search">
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div> */}
	  </div>
      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={People} title="Networking" />
		    <HeaderOption Icon={Receipt} title="Selling" />
		    <HeaderOption Icon={Info} title="About Us" />
		    <HeaderOption Icon={Notifications} title="Notifications" />
		    <HeaderOption avatar="https://d1.awsstatic.com/webteam/homepage/editorials/Site-Merch_Lightsail_Editorial.f3b6112b81a2512198937a63bc1d23381df43bcb.png" title="Justin"
    onClick={logoutofapp}
    />
	  </div>
    </div>
  );
}

export default Header;
