import * as React from "react";
import "../css/404.css";

import SearchBoxHeader from "../components/SearchBoxHeader";

const NotFoundPage = ({
  location = { state: { searchString: "your searched word" } },
}) => {
  // to fix build time error of location.state undefined
  if (location.state) {
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
  } else {
    return null;
  }
};

export default NotFoundPage;
