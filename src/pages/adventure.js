import React from "react";
import { Helmet } from "react-helmet";

import SearchBoxHeader from "../components/SearchBoxHeader";

const Adventure = () => {
  return (
    <div className="search-page">
      <Helmet>
        <title>adventure - Terry Search</title>
      </Helmet>
      <SearchBoxHeader />
      <div className="search-content">Adventure Page Coming Soon!</div>
    </div>
  );
};

export default Adventure;
