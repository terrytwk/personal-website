import React from "react";
import { Helmet } from "react-helmet";

import SearchBoxHeader from "../components/SearchBoxHeader";

const AboutMe = () => {
  return (
    <div className="search-page">
      <Helmet>
        <title>about me - Terry Search</title>
      </Helmet>
      <SearchBoxHeader />
      <div className="search-content">AboutMe Page Coming Soon!</div>
    </div>
  );
};

export default AboutMe;
