import React from "react";
import ZuriLogo from "../images/Zuri.Internship_Logo.svg";
import I4G from "../images/I4G.svg";

const Base = () => {
  return (
    <section id="footer">
      <div className="footer-line base-line" />
      <div className="logos">
        <img src={ZuriLogo} alt="zuri logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G logo" />
      </div>
    </section>
  );
};

export default Base;
