import react, { useState } from "react";
export default function InputNoOfTrees(state) {
  // const { treePurchases } = useSelector((state) => state.formData);
  // const dispatch = useDispatch();
  // const { index, setTreePurchaseConstruct } = state;
  const [noOfTrees, setNoOfTrees] = useState(null);

  return (
    <input
      placeholder="Enter number"
      aria-label="Enter number of trees to purchase"
      type="number"
    />
  );
}

//styles

// height: 33px;
// border: solid rgba(0, 0, 0, .2) 1px;
// border-radius: 3px;
// text-indent: 10px;
