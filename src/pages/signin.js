import React, { useState } from "react";
import "../css/signin.css";
import terry_logo from "../images/terry_logo.png";

import TextField from "@mui/material/TextField";
import { AiOutlineCheckCircle } from "@react-icons/all-files/ai/AiOutlineCheckCircle";

const Signin = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async () => {
    if (!name && !contactInfo && !comments)
      return setErrorMessage("At least one field is required.");

    await fetch(process.env.GATSBY_GOOGLE_SHEET_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, contactInfo, comments }),
    })
      .then((response) => response.text())
      .then((result) => setSubmitted(true))
      .catch((error) =>
        setErrorMessage("Something went wrong. Please try again.")
      );
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
            <p className="error-message">{errorMessage}</p>
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
          <span className="submitted-message">
            <AiOutlineCheckCircle color="green" size="25" />
            <span className="text">Message has been sent!</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Signin;
