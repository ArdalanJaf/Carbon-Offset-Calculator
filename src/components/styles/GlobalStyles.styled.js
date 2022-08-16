import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1em;
        margin: 0;
        color: hsl(192, 100%, 9%);
    }

    p, span {
        line-height: 1.15;
        color: #000;
        /* font-weight: 600; */
    }

// Taken from https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link
  .screen-reader {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  
  .screen-reader-focusable:active,
  .screen-reader-focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }

    // #61892F
// #86C232
// #222629
// #474B4F
// #6B6E70

    /* img {
        max-width: 100%;
    } */
`;

export default GlobalStyles;
/* background-color: ${({ theme }) => theme.colors.body | "#fff"}; */
