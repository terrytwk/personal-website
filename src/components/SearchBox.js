import React, { useState } from "react";
import "../css/SearchBox.css";
import { Link, navigate } from "gatsby";

import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { BiMicrophone } from "@react-icons/all-files/bi/BiMicrophone";
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";
import Typing from "react-typing-animation";
import ReactTooltip from "react-tooltip";

// component containing typing animation
const WelcomeMessage = React.memo(() => {
  return (
    <Typing className="welcome-message">
      <span>Welcome to Terry's website!</span>
      <Typing.Delay ms={1000} />
      <Typing.Backspace count={43} />
      <span>Search about me here!</span>
      <Typing.Delay ms={1000} />
      <Typing.Backspace count={45} />
    </Typing>
  );
});

// component containing search icon, input, and mic icon
const SearchBoxInput = ({
  setFocused,
  pages,
  setPageSuggestions,
  handleSubmit,
}) => {
  return (
    <div className="input-container" id="search-tour">
      <AiOutlineSearch size={20} />
      <input
        className="input"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(event) => {
          setPageSuggestions(
            pages.filter((page) =>
              page.toLowerCase().includes(event.target.value.toLowerCase())
            )
          );
        }}
        onKeyPress={handleSubmit}
      />
      <Link to="/voice-search">
        <BiMicrophone size={20} color="black" data-tip="Search by voice" />
        <ReactTooltip place="bottom" effect="solid" />
      </Link>
    </div>
  );
};

// main component
const SearchBox = ({ stepsEnabled, setStepsEnabled }) => {
  const pages = ["About Me", "Adventure", "Project", "Resume"];

  const [pageSuggestions, setPageSuggestions] = useState(pages);
  const [typing, setTyping] = useState(true);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      if (pageSuggestions[0])
        navigate(`/${pageSuggestions[0].toLowerCase().replace(" ", "-")}`);
      else navigate("/404");
    }
  };

  return (
    <div className="container">
      <div
        className="search-box-container"
        onClick={() => setTyping(false)}
        onKeyDown={() => setTyping(false)}
        role="button"
        tabIndex="0"
      >
        <SearchBoxInput
          setFocused={setFocused}
          setPageSuggestions={setPageSuggestions}
          handleSubmit={handleSubmit}
          pages={pages}
        />
        {typing ? <WelcomeMessage /> : null}
        <div className="history-container">
          <div className="horizontal-rule"></div>
          {pageSuggestions.map((page, i) => (
            <Link
              className="history"
              key={i}
              to={`/${page.toLowerCase().replace(" ", "-")}`}
            >
              <AiOutlineClockCircle color="grey" />{" "}
              <span className="history-text">{page}</span>
            </Link>
          ))}
        </div>
      </div>
      {!focused ? (
        <div
          className="instruction-button"
          onClick={() => setStepsEnabled(!stepsEnabled)}
          onKeyDown={() => setStepsEnabled(!stepsEnabled)}
          tabIndex="0"
          role="button"
        >
          How to Use
        </div>
      ) : null}
    </div>
    // <div
    //   className="search-box-default"
    // onClick={() => setTyping(false)}
    // onKeyDown={() => setTyping(false)}
    // role="button"
    // tabIndex="0"
    // >
    //   <div className="search-box-inner-container" id="search-tour">
    //     <AiOutlineSearch size={20} />
    //     <div className="input-container">
    //       {typing ? <WelcomeMessage /> : null}
    //       <input
    //         className="search-input"
    //         type="text"
    //         onChange={(event) => {
    //           setPageSuggestions(
    //             pages.filter((page) =>
    //               page.toLowerCase().includes(event.target.value.toLowerCase())
    //             )
    //           );
    //         }}
    //         onKeyPress={handleSubmit}
    //       />
    //     </div>
    //     <Link to="/voice-search">
    //       <BiMicrophone size={20} color="black" data-tip="Search by voice" />
    //       <ReactTooltip place="bottom" effect="solid" />
    //     </Link>
    //   </div>

    //   <div className="buttons-container">
    //     <div
    //       className="instruction-button"
    //       onClick={() => setStepsEnabled(!stepsEnabled)}
    //       onKeyDown={() => setStepsEnabled(!stepsEnabled)}
    //       tabIndex="0"
    //       role="button"
    //     >
    //       How to Use
    //     </div>
    //   </div>

    //   <div className="history-container">
    //     <div className="horizontal-rule"></div>

    //     {pageSuggestions.map((page, i) => (
    //       <Link
    //         className="history"
    //         key={i}
    //         to={`/${page.toLowerCase().replace(" ", "-")}`}
    //       >
    //         <AiOutlineClockCircle color="grey" />{" "}
    //         <span className="history-text">{page}</span>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  );
};

export default SearchBox;
