function unixToMY(unixStr, longM = false, longY = false) {
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date(unixStr);
  let month = longM
    ? months[date.getMonth()]
    : months[date.getMonth()].slice(0, 3);
  let year = longY
    ? date.getFullYear()
    : date.getFullYear().toString().slice(-2);
  return `${month} ${year}`;
}

export default unixToMY;
