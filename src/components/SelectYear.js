import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { addPurchase } from "../app/formDataSlice";
import years from "../config/years";
import react, { useState } from "react";

export default function SelectMonth(state) {
  // const { treePurchases } = useSelector((state) => state.formData);
  // const dispatch = useDispatch();
  // const { index, setTreePurchaseConstruct } = state;
  const [year, setYear] = useState(null);

  const optionList = years.map((year) => {
    return { value: year, label: year.toString() };
  });

  function handleSelect(option) {
    // dispatch(setTreePurchaseConstruct(option.value));
    setYear(option.value);
  }

  return (
    <Select
      // defaultInputValue="" <-- pull from local storage option?
      options={optionList}
      placeholder="select year"
      onChange={handleSelect}
      aria-label="Select year for trees purchase entry"
    />
  );
}
