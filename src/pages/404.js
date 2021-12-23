import * as React from "react";
import "../css/404.css";
import { Link } from "gatsby";

import SearchBoxHeader from "../components/SearchBoxHeader";

const NotFoundPage = () => {
  return (
    <div className="not-found-page-container search-page">
      <SearchBoxHeader />
      <div className="search-content">
        <p>
          Your search - guiragreioregjefwijoewfkop - did not match any
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
