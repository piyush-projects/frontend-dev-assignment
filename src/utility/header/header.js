import React from "react";
import SearchBar from "utility/searchbar/searchbar";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div>WOOKIE</div>
        <div>MOVIES</div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
