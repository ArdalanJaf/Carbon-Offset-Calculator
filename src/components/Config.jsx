import React, { useState } from "react";
import StyledBackground from "./styles/Background.styled";
// import { useState } from "react";
import sky2 from "../../public/sky2.jpg";

function Background() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledBackground className="smooth-image-wrapper">
      <img
        src={sky2}
        alt="sky"
        className={`smooth-image image-${imageLoaded ? "visible" : "hidden"}`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <div className="smooth-preloader">LOADING</div>}
    </StyledBackground>
  );
}

export default Background;
