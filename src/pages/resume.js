import React from "react";
import { Helmet } from "react-helmet";

import SearchBoxHeader from "../components/SearchBoxHeader";

const Resume = () => {
  return (
    <div className="search-page">
      <Helmet>
        <title>resume - Terry Search</title>
      </Helmet>
      <SearchBoxHeader />
      <div className="search-content">Resume Page Coming Soon!</div>
    </div>
  );
};

export default Resume;
