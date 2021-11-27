import React, { useLayoutEffect, useState } from "react";
import "../css/voice-search.css";

import { MdMic } from "@react-icons/all-files/md/MdMic";

const VoiceSearch = () => {
  const [message, setMessage] = useState("Waiting...");

  useLayoutEffect(() => {
    window.confirm("Allow access to your microphone.");

    setTimeout(() => {
      setMessage("Just kidding :P \n Voice recognition not implemented.");
    }, 3000);
  }, []);

  return (
    <div className="voice-search-container">
      <div className="gradient"></div>
      <div className="content">
        <span className="text">{message}</span>
        <MdMic size={80} color="#ededed" />
      </div>
    </div>
  );
};

export default VoiceSearch;
