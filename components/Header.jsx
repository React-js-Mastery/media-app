import React from "react";
import brainImg from "../images/icons/brain.svg";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img className="logo-image" src={brainImg} />
        <h1>CMHQMedia</h1>
      </div>
      <div className="header-links-container">
        <a href="#">Log in</a>
        <a href="#">Sign up</a>
      </div>
    </header>
  );
}
