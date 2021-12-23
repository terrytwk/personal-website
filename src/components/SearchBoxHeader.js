import React from "react";
import "../css/SearchBoxHeader.css";
import { Link } from "gatsby";

import SearchBox from "./SearchBox";
import Header from "./Header";
import terry_logo from "../images/terry_logo.png";

const SearchBoxHeader = () => {
  return (
    <div className="search-box-header-container">
      <Header onHome={false} />
      <Link to="/">
        <img src={terry_logo} alt="terry_logo" height="40px" className="logo" />
      </Link>
      <SearchBox onHome={false} />
      <div className="search-box-header-horizontal-rule"></div>
    </div>
  );
};

export default SearchBoxHeader;
