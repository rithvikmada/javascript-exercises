const convertToCelsius = function(temp) {
  let cel = (5/9) * (temp - 32);
  let result = Number(cel.toFixed(1));
  return result;
};

const convertToFahrenheit = function(temp) {
  let fa = ((9/5) * temp) + 32;
  let result = Number(fa.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
