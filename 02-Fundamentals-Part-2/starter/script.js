"use strict";

// // Assignment #1 - Functions
// function describeCountry(country, population, capitalCity) {
//   const aboutYourCountry = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
//   return aboutYourCountry;
// }

// const aboutCountry = describeCountry(`Brazil`, 222, `Brasilia`);
// console.log(aboutCountry);

// // Assignment #2 - Function Declarations vs. Expressions
// // Declarations
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const brazilPop = percentageOfWorld1(222);
// const swedenPop = percentageOfWorld1(10);
// const usaPop = percentageOfWorld1(329);

// console.log(brazilPop.toFixed(1), swedenPop.toFixed(1), usaPop.toFixed(1));

// // Expressions
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const brazilPop1 = percentageOfWorld1(222);
// const swedenPop1 = percentageOfWorld1(10);
// const usaPop1 = percentageOfWorld1(329);

// console.log(brazilPop1.toFixed(1), swedenPop1.toFixed(1), usaPop1.toFixed(1));

// // Assignment #3 - Arrow Functions
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const brazilPop1 = percentageOfWorld3(222);
// console.log(brazilPop1.toFixed(1));

// Assignment #4 - Functions Calling Other Functions
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage.toFixed(
//     1
//   )}% of the world.`;

//   return console.log(description);
// }

// describePopulation(`Brazil`, 222);
// describePopulation(`USA`, 329);
// describePopulation(`Portugal`, 23);

// // Challenge #01

// // Data 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const checkWinner = function (avgDolphins, avgKoalas) {
//   avgDolphins = calcAverage(44, 23, 71).toFixed(0);
//   avgKoalas = calcAverage(65, 54, 27).toFixed(0);

//   if (avgDolphins >= 2 * avgKoalas) {
//     return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
//   } else {
//     return console.log(`Nobody win, it's a draw.`);
//   }
// };

// const whoWin = checkWinner();

// // Data 2
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const checkWinner = function (avgDolphins, avgKoalas) {
//   avgDolphins = calcAverage(85, 54, 71).toFixed(0);
//   avgKoalas = calcAverage(23, 34, 27).toFixed(0);

//   if (avgDolphins >= 2 * avgKoalas) {
//     return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
//   } else {
//     return console.log(`Nobody win, it's a draw.`);
//   }
// };

// const whoWin = checkWinner();

// Assignment #5 - Introduction to Arrays

// Function used to get the %
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage.toFixed(
//     1
//   )}% of the world.`;

//   return console.log(description);
// }

// describePopulation(`Brazil`, 222);
// describePopulation(`USA`, 329);
// describePopulation(`Portugal`, 23);
// describePopulation(`China`, 1441);

// const countries = [`Brazil`, `USA`, `Portugal`, `China`];
// const populations = [222, 239, 23, 1441];
// console.log(4 >= populations.length);

// const percentages = [2.8, 4.2, 0.3, 18.2];

// console.log(
//   `${countries[0]} has a population ${populations[0]} million, which is ${percentages[0]}% of the population the world.`
// );

// Assignment #6 - Basic Array Operations (Methods)
// const neighbors = [`Argentina`, `Bolivia`, `Uruguay`, `Colombia`, `Paraguay`];

// neighbors.push(`Utopia`);
// console.log(neighbors);

// neighbors.pop();
// console.log(neighbors);

// if (!neighbors.includes(`Germany`)) {
//   console.log(`Probably not a South America country.`);
// }

// neighbors[neighbors.indexOf(`Argentina`)] = `Republic of Argentina`;
// console.log(neighbors);

// // Challenge #02
// function calcTip(bill) {
//   if (bill <= 300 && bill >= 50) {
//     return (bill * 15) / 100;
//   } else {
//     return (bill * 20) / 100;
//   }
// }

// const bill = [125, 555, 44];

// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

// const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
// console.log(bill, tips, total);

// Assignment #7 - Introduction to Objects
// const myCountry = {
//   country: `Brazil`,
//   capital: `Brasilia`,
//   language: `Portuguese`,
//   population: 222,
//   neighbors: [`Argentina`, `Bolivia`, `Uruguay`, `Colombia`, `Paraguay`],
// };

// Assignment #8 - Dot vs. Bracket Notation
// const myCountry = {
//   country: `Brazil`,
//   capital: `Brasilia`,
//   language: `portuguese`,
//   population: 222,
//   neighbors: [
//     `Argentina`,
//     `Bolivia`,
//     `Uruguay`,
//     `Colombia`,
//     `Paraguay`,
//     `Peru`,
//     `Venezuela`,
//     `Guiana`,
//     `Suriname`,
//     `French Guiana`,
//   ],
// };
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbors countries and it's capital is ${myCountry.capital}.`
// );

// Assignment #9 - Object Methods
// const myCountry = {
//   country: `Brazil`,
//   capital: `Brasilia`,
//   language: `portuguese`,
//   population: 222,
//   neighbors: [
//     `Argentina`,
//     `Bolivia`,
//     `Uruguay`,
//     `Colombia`,
//     `Paraguay`,
//     `Peru`,
//     `Venezuela`,
//     `Guiana`,
//     `Suriname`,
//     `French Guiana`,
//   ],
//   isIsland: false,
//   describe: function () {
//     return `${this.country} has ${this.population} million ${
//       this.language
//     }-speaking people, have ${
//       this.isIsland ? `no` : this.neighbors.length
//     } neighbors countries and it's capital is ${this.capital}.`;
//   },
// };

// console.log(myCountry.describe());

// // Challenge #03
// const mark = {
//   firstName: `Mark`,
//   lastName: `Miller`,
//   height: 1.69,
//   mass: 78,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: `John`,
//   lastName: `Smith`,
//   height: 1.95,
//   mass: 92,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const BMIhigher = function () {
//   mark.calcBMI();
//   john.calcBMI();
//   if (mark.bmi > john.bmi) {
//     return console.log(
//       `${mark.firstName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
//         john.firstName
//       } (${john.bmi.toFixed(1)})!`
//     );
//   } else {
//     return console.log(
//       `${john.firstName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
//         mark.firstName
//       } (${mark.bmi.toFixed(1)})!`
//     );
//   }
// };

// BMIhigher();

// Assignment #10 - Iteration: The for Loop
// for (let votes = 1; votes <= 50; votes++) {
//   console.log(`Voter number ${votes} is currently voting.`);
// }

// Assignment #11 - Looping Arrays, Breaking and Continuing
// const populations = [222, 239, 23, 1441];
// const percentages2 = [];
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// for (let i = 0; i < populations.length; i++) {
//   const percentages = percentageOfWorld1(populations[i]).toFixed(1);
//   percentages2.push(percentages);
// }

// console.log(percentages2);

// Assignment #12 - Looping Backwards and Loops in Loops
// const listOfNeighbors = [
//   [`Canada`, `Mexico`],
//   [`Spain`],
//   [`Norway`, `Sweden`, `Russia`],
// ];

// for (let country = 0; country < listOfNeighbors.length; country++) {
//   for (let neighbor = 0; neighbor < listOfNeighbors[country].length; neighbor++)
//     console.log(`Neighbor: ${listOfNeighbors[country][neighbor]}`);
// }

// Assignment #13 - The while Loop
// const populations = [222, 239, 23, 1441];
// const percentages2 = [];
// const percentages3 = [];
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// // for (let i = 0; i < populations.length; i++) {
// //   const percentages = percentageOfWorld1(populations[i]).toFixed(1);
// //   percentages2.push(percentages);
// // }

// let y = 0;
// while (y < populations.length) {
//   const percentages = percentageOfWorld1(populations[y]).toFixed(1);
//   percentages3.push(percentages);
//   y++;
// }

// console.log(percentages2);
// console.log(percentages3);

// // Challenge #04
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//   if (bill <= 300 && bill >= 50) {
//     return (bill * 15) / 100;
//   } else {
//     return (bill * 20) / 100;
//   }
// }

// let y = 0;
// while (y < bills.length) {
//   const percentages = calcTip(bills[y]);
//   tips.push(percentages);
//   totals.push(percentages + bills[y]);
//   y++;
// }

// console.log(
//   `The $${bills[1]} bill tip is $${tips[1]}, and the total to pay is $${totals[1]}.`
// );

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const sum = calcAverage(totals);

// console.log(bills);
// console.log(tips);
// console.log(totals);
// console.log(sum);
// console.log(sum / bills.length);

// const valorTotal = [];

// for (let total = 0; total < 100; total++) {
//   // console.log(`o laço for executou: ${total} vezes`);
//   const valorTotal = [total];

//   if (total === 10) {
//     console.log(valorTotal);

//     break;
//   }
// }

// let counter = 1;
// while (counter <= 10) {
//   console.log(counter);
//   const array = [counter++];
//   // console.log(array);
// }
// console.log(counter);

// var arr = [1, 2, 3, 4];
// arr = arr.map(function (val) {
//   return ++val;
// });

// console.log(arr);
// Assignment #13 - The while Loop
// const populations = [222, 239, 23, 1441];
// const percentages2 = [];
// const percentages3 = [];
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// // for (let i = 0; i < populations.length; i++) {
// //   const percentages = percentageOfWorld1(populations[i]).toFixed(1);
// //   percentages2.push(percentages);
// // }
