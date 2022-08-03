import { useDispatch, useSelector } from "react-redux";

export default function DatePicker(state) {
  const { treePurchases } = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  console.log(today.getTime());
  const currentMonth = months[today.getMonth()];
  const currentYear = today.getFullYear();

  return (
    <select
      value={treePurchases[treePurchases.length - 1].date.month || currentMonth}
      onChange={(e) => dispatch()}
    >
      {months.map((month, i) => {
        return (
          <option key={i} value={i}>
            {month}
          </option>
        );
      })}
    </select>
  );
}
