import React from "react";
import { Helmet } from "react-helmet";

import SearchBoxHeader from "../components/SearchBoxHeader";

const Project = () => {
  return (
    <div className="search-page">
      <Helmet>
        <title>project - Terry Search</title>
      </Helmet>
      <SearchBoxHeader />
      <div className="search-content">Project Page Coming Soon!</div>
    </div>
  );
};

export default Project;
