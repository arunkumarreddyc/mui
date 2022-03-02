import React from "react";
import './Navbar.css'
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
 <div className="header">
    <div className="navbars">
      <img
        src="https://blog.logomyway.com/wp-content/uploads/2020/03/arbnb-logo.jpg"
        height="50"
        width="50"
        className="airbnbicon"
      />
      <div className="search">
        <input type="text" className='inputbar' />
        <SearchIcon />
        
      </div>
      <div className='rightnavicons'>
            <p>Become a Host</p>
          <ArrowDropDownIcon />
          <LanguageIcon />
          <AccountCircleIcon />
        </div>
    
    </div>
    <hr />
    </div>   
  );
}
