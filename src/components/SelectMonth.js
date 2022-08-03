import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { addPurchase } from "../app/formDataSlice";
import { months } from "../config/months";
import react, { useState } from "react";

export default function SelectMonth(state) {
  // const { treePurchases } = useSelector((state) => state.formData);
  // const dispatch = useDispatch();
  // const { index, setTreePurchaseConstruct } = state;
  const [month, setMonth] = useState(null);

  const optionList = months.map((month, index) => {
    return { value: index, label: month };
  });

  function handleSelect(option) {
    // dispatch(setTreePurchaseConstruct(option.value));
    setMonth(option.value);
  }

  const today = new Date();
  const currentMonth = months[today.getMonth()];
  const currentYear = today.getFullYear();

  return (
    <>
      <Select
        // defaultInputValue="" <-- pull from local storage option?
        options={optionList}
        placeholder="select month"
        onChange={handleSelect}
        aria-label="Select month for trees purchase entry"
      />

      <p>
        {month} {months[month]}
      </p>
    </>
  );

  // return (
  //   <select
  //     value={treePurchases[treePurchases.length - 1].date.month || currentMonth}
  //     onChange={(e) => dispatch()}
  //   >
  //     {months.map((month, i) => {
  //       return (
  //         <option key={i} value={i}>
  //           {month}
  //         </option>
  //       );
  //     })}
  //   </select>
  // );
}
