import React from "react";
import StyledBackground from "./styles/Background.styled";
// import { useState } from "react";
import sky from "../images/sky.jpg";

function Background() {
  return (
    <StyledBackground className="smooth-image-wrapper">
      <img
        src={sky}
        alt="sky"
        // className={`smooth-image image-${imageLoaded ? "visible" : "hidden"}`}
        // onLoad={() => setImageLoaded(true)}
      />
      {/* {!imageLoaded && <div className="smooth-preloader">LOADING</div>} */}
    </StyledBackground>
  );
}

export default Background;
