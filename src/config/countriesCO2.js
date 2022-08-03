// Average CO2 consumption per person per year(metric tons) for different countries
// Stored in config file for organisation and in future scenario where API pulls this data.
const countriesCO2 = [
  { name: "United States", annualCO2EmissionsPerCapita: 15.52 },
  { name: "United Kingdom", annualCO2EmissionsPerCapita: 5.55 },
  { name: "Germany", annualCO2EmissionsPerCapita: 9.44 },
  { name: "South Africa", annualCO2EmissionsPerCapita: 6.95 },
  { name: "India", annualCO2EmissionsPerCapita: 1.91 },
  { name: "China", annualCO2EmissionsPerCapita: 7.38 },
  { name: "Singapore", annualCO2EmissionsPerCapita: 8.56 },
  { name: "Australia", annualCO2EmissionsPerCapita: 17.1 },
];

export default countriesCO2;

// React-Select version
// const optionList = [
//   { value: 15.52, label: "United States" },
//   { value: 5.55, label: "United Kingdom" },
//   { value: 9.44, label: "Germany" },
//   { value: 6.95, label: "South Africa" },
//   { value: 1.91, label: "India" },
//   { value: 7.38, label: "China" },
//   { value: 8.56, label: "Singapore" },
//   { value: 17.1, label: "Australia" },
// ];
