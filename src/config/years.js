// List of year options selectable for tree purchase entrees
const years = [];

// Max years in future that can be selected
const maxYears = 50;

const today = new Date();
const currentYear = today.getFullYear(); // return format: yyyy

// Creates list of years from current year to maxYears specified.
for (let i = currentYear; i < currentYear + maxYears; i++) {
  years.push(i);
}

export default years;
