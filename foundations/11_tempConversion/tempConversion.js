const convertToCelsius = // Fahrenheit to Celsius formula: (F - 32) * 5/9
function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10;
}

// Celsius to Fahrenheit formula: (C * 9/5) + 32
function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * (9 / 5)) + 32;
  return Math.round(fahrenheit * 10) / 10;
}

// Don't forget to export them as an object for the Odin Project tests!
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
