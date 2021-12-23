import React, { useState } from "react";
import "../css/index.css";
import terry_logo from "../images/terry_logo.png";

import { Helmet } from "react-helmet";
import "intro.js/introjs.css";
import { Steps } from "intro.js-react";

import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

const IndexPage = () => {
  // for guided tour
  const [stepsEnabled, setStepsEnabled] = useState(false);
  const initialStep = 0;
  const steps = [
    { element: "#tmail-tour", intro: "Send email to Terry using Tmail." },
    { element: "#links-tour", intro: "Checkout Terry's links." },
    {
      element: "#signin-tour",
      intro: "Let Terry know you visited his website.",
    },
    { element: "#search-tour", intro: "Search about Terry." },
  ];

  return (
    <div className="index-container">
      <Helmet>
        <title>Terry</title>
      </Helmet>

      {/* condition to avoid error "document is undefined" when running `gatsby build` */}
      {typeof window !== "undefined" ? (
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={() => setStepsEnabled(false)}
        />
      ) : null}
      <Header />
      <img src={terry_logo} alt="terry_logo" height="15%" className="logo" />
      <SearchBox
        stepsEnabled={stepsEnabled}
        setStepsEnabled={setStepsEnabled}
      />
    </div>
  );
};

export default IndexPage;
