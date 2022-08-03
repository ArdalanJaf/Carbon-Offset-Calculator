import DatePicker from "./DatePicker";
// import DatePicker from "react-date-picker";
import React, { useState } from "react";

export default function Purchase(state) {
  const [value, onChange] = useState(new Date());

  const { index } = state;
  const today = Date();

  return <DatePicker index={index} />;
  //   return (
  //     <tr>
  //       <td> {index + 1} </td>
  //       <td>
  //         {" "}
  //         {/* <DatePicker index={index} /> */}
  //         <DatePicker
  //           onChange={onChange}
  //           value={value}
  //           format="MM-y"
  //           maxDetail="year"
  //         />
  //       </td>
  //       <td>
  //         <input> trees </input> no of trees
  //       </td>
  //       <td>
  //         {" "}
  //         <button></button>
  //       </td>
  //     </tr>
  //   );
}
