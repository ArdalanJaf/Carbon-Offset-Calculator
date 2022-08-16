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
