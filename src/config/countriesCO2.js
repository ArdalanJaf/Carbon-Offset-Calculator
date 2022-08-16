// Average CO2 consumption per person per year(metric tons) for different countries
// Stored in config file for organisation and in future scenario where API pulls this data.
const countriesCO2 = [
  { name: "United States (15.52)", annualCO2PerCapita: 15.52 },
  { name: "United Kingdom (5.55)", annualCO2PerCapita: 5.55 },
  { name: "Germany (9.44)", annualCO2PerCapita: 9.44 },
  { name: "South Africa (6.95)", annualCO2PerCapita: 6.95 },
  { name: "India (1.91)", annualCO2PerCapita: 1.91 },
  { name: "China (7.38)", annualCO2PerCapita: 7.38 },
  { name: "Singapore (8.56)", annualCO2PerCapita: 8.56 },
  { name: "Australia (17.1)", annualCO2PerCapita: 17.1 },
  { name: "Custom", annualCO2PerCapita: 0 }, // Custom must always be last element in array!
];

export default countriesCO2;
