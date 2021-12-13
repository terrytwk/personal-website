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

  const handleSubmit = () => {
    if (!name && !contactInfo && !comments)
      return setErrorMessage("At least one field is required.");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "COMPASS=spreadsheet_forms=CjIACWuJVwzzJOgKRV7ZE-eGY8Cz_5qovxPZt5nPgy-cNSBmkvZo4M8KsYsTYHGEU2MQnhCN8tuNBho0AAlriVctfIS1X2wSCQdpNlFwKG1A2jbAcaQVvao6bZ8VVVKV0Asqpa6MtTN_NIOCESoXmA==; S=spreadsheet_forms=1BIBbdvVfUaQP09-x7eGNOR9xRrbnmOp3_WKYbEjJz8; NID=511=GoGE_eUzcXXnU9mU7a19tPjpm7M7r9E5OD73tHAjnwJ9RvhbH76kXEJ-IwEWLd7nBoC4-iw-SpMdYRmTnuSo2wfHEqfEbHEebQ6DVfGpQUYDe8U4DUwNZGxMh6zilo1VKh_FSNKKKHebuApWVnTBUjwSOQyZTbQMV6lW__sp3fw"
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append("entry.1774825969", name);
    urlencoded.append("entry.1421939944", contactInfo);
    urlencoded.append("entry.1638789278", comments);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf9cJpzVlIOXc6lQXEvqvwVZkRcnJws61UbAznuf2WPnnneIg/formResponse",
      requestOptions
    )
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
            <AiOutlineCheckCircle color="green" size="25}" />
            <span className="text">Message has been sent!</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Signin;
