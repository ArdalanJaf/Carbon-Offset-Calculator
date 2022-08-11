export default function sortTP(tp1, tp2) {
  if (Number(tp1.year) < Number(tp2.year)) {
    return -1;
  } else if (Number(tp1.year) > Number(tp2.year)) {
    return 1;
  } else if (Number(tp1.month) < Number(tp2.month)) {
    return -1;
  } else if (Number(tp1.month) > Number(tp2.month)) {
    return 1;
  } else return 0;
}
