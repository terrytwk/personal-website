import React from "react";
import "../css/Header.css";
import { Link } from "gatsby";

import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO";

const Header = ({ dropdownShow, setDropdownShow }) => {
  const handleMenuClick = () => {
    setDropdownShow(!dropdownShow);
  };
  return (
    <div className="header-container">
      <a className="text" id="tmail-tour" href="mailto:terrytwk@mit.edu">
        Tmail
      </a>
      {/* <Link className="text">Images</Link> */}
      <div
        className="menu-icon"
        id="links-tour"
        onClick={handleMenuClick}
        onKeyDown={handleMenuClick}
        role="button"
        tabIndex="0"
      >
        <CgMenuGridO size={25} color="#5f6367" />
      </div>
      <Link className="sign-in" id="signin-tour" type="button" to="/signin">
        Sign In
      </Link>
    </div>
  );
};

export default Header;
