import React from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "utility/searchbar/searchbar";
import "./header.scss";

const Header = () => {
  const history = useHistory();

  const navigateToHome = () => {
    history.push("/movie");
  };

  return (
    <div className="header">
      <div className="logo" onClick={navigateToHome}>
        <div>WOOKIE</div>
        <div>MOVIES</div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
