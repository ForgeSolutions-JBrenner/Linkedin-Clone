import React from "react";
import "./headeroption.css";
import {Avatar} from '@material-ui/core'

function HeaderOption({ avatar, Icon, title, onClick}) {
  return (
    <div onClick={onClick} className="ho">
      {Icon && <Icon className="ho_icon" />}
      {avatar && <Avatar className="ho_icon" src={avatar} />}
      <h3 className="ho_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
