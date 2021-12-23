import * as React from "react";
import "../css/404.css";
import { Link } from "gatsby";

import SearchBoxHeader from "../components/SearchBoxHeader";

const NotFoundPage = ({ location }) => {
  return (
    <div className="not-found-page-container search-page">
      <SearchBoxHeader />
      <div className="search-content">
        <p>
          Your search - {location.state.searchString} - did not match any
          documents.
        </p>
        <p>Suggestions:</p>
        <ul>
          <li>About Me</li>
          <li>Adventure</li>
          <li>Project</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFoundPage;
