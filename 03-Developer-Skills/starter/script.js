// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printTempForecast = function (temps) {
  let str = "";
  for (let i = 0; i < temps.length; i++) {
    str += `${temps[i]}ºc in ${i + 1} days. `;
  }
  console.log("The temperature will be " + str);
};
printTempForecast(data1);
printTempForecast(data2);
