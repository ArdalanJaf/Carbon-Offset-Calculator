import styled from "styled-components";

const StyledPurchaseTable = styled.table`
  /* padding: 0.5em; */
  /* table-layout: fixed;  */
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 1em;
  /* background-color: #f6faf5; */
  /* border-radius: 10px; */
  /* margin-bottom: 1em; */
  /* background-color: #fff; */

  // space between rows
  th,
  td {
    padding: 0.5em 0;
  }

  // table header
  th {
    font-weight: 400;
    font-style: italic;
    /* text-align: start; */
    span {
      color: #000;
    }
  }

  // Space between cells & border between rows
  th:not(th:last-of-type),
  td:not(td:last-of-type) {
    border-bottom: 2px solid cadetblue;
    padding-right: 5px;
    padding-left: 5px;
  }

  // preserves format when error <p></p> displayed
  tr td {
    vertical-align: top;
  }
  thead th:last-of-type,
  tr td:last-of-type {
    width: 38px;
    vertical-align: top;
  }

  // preserves format if rows are numbered
  /* td span {
    display: block;
    padding-top: 7px;
    opacity: 0.6;
  }

  thead th:first-of-type,
  tr td:first-of-type {
    width: 2em;
    text-align: center;
  } */
`;

export default StyledPurchaseTable;

// #61892F
// #86C232
// #222629
// #474B4F
// #6B6E70
