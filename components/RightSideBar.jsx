import React from "react";
import { nanoid } from "nanoid";

export default function RightSideBar() {
  const debateElements = [
    "ChatGPT: Good or Bad?",
    "Dogs vs. Cats",
    "Vue vs. React",
    "Toilet Paper: Over or Under?",
    "What is CMHQ? and what' about CMHQ",     
    "What is the best way to learn to code?",       
    "CSS Grid vs. Flex",
    "Semicolons in JS: Yes or No?",
  ].map((question) => <button key={nanoid()}>{question}</button>);

  return (
    <div className="right-side-bar">
      <div className="right-side-bar-inner-container">
        <div className="search-container">
          <img src="/images/icons/search.svg" />
          <input />
        </div>
        <h3>Trending Debates</h3>
        {debateElements}
      </div>
    </div>
  );
}
