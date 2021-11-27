import React from "react";
import "../css/DropdownMenu.css";

import { Link } from "gatsby";

import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

const Item = ({ icon, title }) => {
  return (
    <>
      <div className="icon">{icon}</div>
      <span className="title">{title}</span>
    </>
  );
};

const DropdownMenu = () => {
  const items = [
    {
      title: "LinkedIn",
      icon: <AiFillLinkedin size={40} />,
      link: "https://www.linkedin.com/in/tae-wook-terry-kim-5824861b5/",
    },
    {
      title: "GitHub",
      icon: <AiFillGithub size={40} />,
      link: "https://github.com/terrytwk",
    },
  ];

  return (
    <div className="dropdown-menu-container">
      {items.map((item, i) => (
        <Link className="item-container" to={item.link} target="_blank">
          <Item title={item.title} icon={item.icon} key={i} />
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
