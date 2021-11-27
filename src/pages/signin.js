import React, { useState } from "react";
import "../css/signin.css";
import terry_logo from "../images/terry_logo.png";

import TextField from "@mui/material/TextField";

const Signin = () => {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    // add loading animation on button
    alert(`${name} with contact info ${contactInfo} has said "${comments}"`);
    setSubmitted(true);
  };

  return (
    <div className="signin-container">
      <div className="signin-inner-container">
        <img src={terry_logo} alt="terry_logo" height="40" className="logo" />
        <span className="signin">Sign in</span>
        <span className="message">Tell Terry you were here!</span>
        {!submitted ? (
          <>
            <TextField
              className="input"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              className="input"
              label="Contact Information"
              variant="outlined"
              value={contactInfo}
              onChange={(event) => setContactInfo(event.target.value)}
            />
            <TextField
              className="input"
              label="Comments"
              multiline
              maxRows={3}
              variant="outlined"
              value={comments}
              onChange={(event) => setComments(event.target.value)}
            />
            <div
              className="submit"
              onClick={handleSubmit}
              onKeyDown={handleSubmit}
              role="button"
              tabIndex="0"
            >
              Submit
            </div>
          </>
        ) : (
          <span className="submitted-message">Message has been sent!</span>
        )}
      </div>
    </div>
  );
};

export default Signin;
