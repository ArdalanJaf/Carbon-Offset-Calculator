// Average CO2 consumption per person per year(metric tons) for different countries
// Stored in config file for organisation and in future scenario where API pulls this data.
const countriesCO2 = [
  { name: "United States", annualCO2PerCapita: 15.52 },
  { name: "United Kingdom (5.55)", annualCO2PerCapita: 5.55 },
  { name: "Germany", annualCO2PerCapita: 9.44 },
  { name: "South Africa", annualCO2PerCapita: 6.95 },
  { name: "India", annualCO2PerCapita: 1.91 },
  { name: "China", annualCO2PerCapita: 7.38 },
  { name: "Singapore", annualCO2PerCapita: 8.56 },
  { name: "Australia", annualCO2PerCapita: 17.1 },
  { name: "Custom", annualCO2PerCapita: 0 }, // Custom must always be last element in array!
];

export default countriesCO2;
