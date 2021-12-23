import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "gatsby";

import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO";
import OutsideClickHandler from "react-outside-click-handler";
import DropdownMenu from "../components/DropdownMenu";

const Header = ({ onHome = true }) => {
  const [dropdownShow, setDropdownShow] = useState(false);

  const handleMenuClick = () => {
    setDropdownShow(!dropdownShow);
  };
  return (
    <div className="header-container" style={{ top: onHome ? 0 : 20 }}>
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
        <CgMenuGridO size={24} color="#5f6367" />
      </div>
      <Link className="sign-in" id="signin-tour" type="button" to="/signin">
        Sign In
      </Link>
      <OutsideClickHandler onOutsideClick={() => setDropdownShow(false)}>
        {dropdownShow ? <DropdownMenu /> : null}
      </OutsideClickHandler>
    </div>
  );
};

export default Header;
