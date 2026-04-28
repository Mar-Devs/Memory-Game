import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./renderAllComponents";
import "./main.css";
import loadingIcon from "./assets/3.svg"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <div className="div">
    <h1>Memory Game</h1>
    <p>
      How it works:
      <ul>
        <li>Each round you pick one image.</li>
        <li>Once you do so, the images you refresh.</li>
        <li>Your objective is to pick as many unique images as you can.</li>
        <li>Hence, the 'Memory' in Memory Game.</li>
      </ul>
    </p>
    </div> */}
    <img className="loading-icon" src={loadingIcon} alt="pokemon-loading" />
    <Main />
  </StrictMode>,
);
