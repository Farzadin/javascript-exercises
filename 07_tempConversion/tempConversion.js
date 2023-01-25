const convertToCelsius = function (f) {
  // formula: C = (f - 32) / 1.8
  let c = (f - 32) / 1.8;
  let cRounded = Math.round(c * 10) / 10; // rounded c to 1 decimal place
  return cRounded;
};

const convertToFahrenheit = function (c) {
  // formula: C * 1.8 + 32 = F
  let f = c * 1.8 + 32;
  let fRounded = Math.round(f * 10) / 10; // Rounded f to 1 decimal place
  return fRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
