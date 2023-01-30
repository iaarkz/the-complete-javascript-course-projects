// Assignment 1 - Values and Variables
// const myCountry = "Brazil";
// const myContinent = "South America";
// const myCountryPop = "212,6 millions";

// console.log(
//   `My country is ${myCountry} in the continent ${myContinent} with a population of ${myCountryPop}.`
// );

// Assignment 2 - Data Types
// const isIsland = false;
// let ourLanguage;

// console.log(isIsland, myCountryPop, myCountry, ourLanguage);

// Assignment 3 - let, const and var
// let ourLanguage = "portuguese";
// const myCountry = "Brazil";
// const myContinent = "South America";

// ourLanguage = "brazilian portuguese";
// myCountry = "Portugal"; // const can't be revaluated, if tried get's error TypeError: Assignment to constant variable

// console.log(ourLanguage, myContinent, myCountry);

// Assignment 4 - Basic Operators
// const myCountryPop = "212,6 millions";
// const finland = "6 millions";
// const description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";

// let halfPop = parseFloat(myCountryPop) / 2;
// let increasePop = parseFloat(myCountryPop) + 1;
// let verifyPop = parseFloat(finland) >= parseFloat(myCountryPop);

// console.log(halfPop);
// console.log(increasePop);
// console.log(verifyPop);
// console.log(description);

// Challenge 1
// let marksMass = 78;
// let marksHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;

// let massMarks = marksMass / marksHeight ** 2;
// let massJohn = johnMass / johnHeight ** 2;

// let markHigherBMI = marksMass > massJohn;

// console.log(Math.round(massMarks));
// console.log(Math.round(massJohn));
// console.log(markHigherBMI);

// marksMass = 95;
// marksHeight = 1.88;

// johnMass = 85;
// johnHeight = 1.76;

// massMarks = marksMass / marksHeight ** 2;
// massJohn = johnMass / johnHeight ** 2;

// markHigherBMI = marksMass > massJohn;

// console.log(Math.round(massMarks));
// console.log(Math.round(massJohn));
// console.log(markHigherBMI);

// Assignment 5 - Strings and Template Literals
// const countryNew = `Portugal`;
// const countryRegion = `Europe`;
// const countryNewPop = `11 millions`;
// const countryLanguage = `portuguese`;
// const description = `${countryNew} is in ${countryRegion}, and it's ${countryNewPop} people speak ${countryLanguage}`;

// console.log(description);

// Assignment 6 - Taking Decisions: if / else Statements
// const brazilPop = 220;
// const averagePop = 33;

// if (brazilPop >= averagePop) {
//   console.log(`Brazil population is above average.`);
// } else {
//   console.log(
//     `Brazil population is ${averagePop - brazilPop} millions below the average.`
//   );
// }

// // Challenge 2
// const marksMass = 78;
// const marksHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

// const bmiMarks = marksMass / marksHeight ** 2;
// const bmiJohn = johnMass / (johnHeight * johnHeight);

// if (bmiMarks > bmiJohn) {
//   console.log(
//     `Mark's BMI (${Math.round(bmiMarks)}) is higher than John's (${Math.round(
//       bmiJohn
//     )})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${Math.round(bmiJohn)}) is higher than Mark's! (${Math.round(
//       bmiMarks
//     )})`
//   );
// }

// Assignment 7 - Type Conversion and Coercion
// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); //617
// console.log("19" - "13" + 17); //23
// console.log("123" < 57); //false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

// Assignment 8 - Equality Operators: == vs. ===
// const numNeighbors = Number(
//   prompt("How many neighbor countries does your country have?")
// );

// if (numNeighbors == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors === 2) {
//   console.log("Wow, you have more than 1 border!");
// } else {
//   console.log("No borders.");
// }

// Assignment 9 - Logical Operators
// const newCountryPop = 38;
// const newCountryLang = "english";
// const isIsland = false;
// const country = "Canada";

// if (newCountryLang === "english" && newCountryPop < 50 && !isIsland) {
//   console.log(`You should live in ${country}! :D`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// Challenge 3
// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

// console.log(Math.round(dolphinsScore), Math.round(koalasScore));

// if (dolphinsScore > koalasScore) {
//   console.log("Dolphins win the trophy!");
// } else if (dolphinsScore < koalasScore) {
//   console.log("Koalas win the trophy!");
// } else if (dolphinsScore === koalasScore) {
//   console.log("No teams have won the trophy.");
// }

// // BONUS #1
// const dolphinsScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 123) / 3;

// console.log(Math.round(dolphinsScore), Math.round(koalasScore));

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log("Dolphins win the trophy!");
// } else if (dolphinsScore < koalasScore && koalasScore >= 100) {
//   console.log("Koalas win the trophy!");
// } else if (dolphinsScore === koalasScore) {
//   console.log("No teams have won the trophy.");
// }

// // BONUS #2
// const dolphinsScore = (97 + 112 + 89) / 3;
// const koalasScore = (109 + 95 + 90) / 3;

// console.log(Math.round(dolphinsScore), Math.round(koalasScore));

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log("Dolphins win the trophy!");
// } else if (dolphinsScore < koalasScore && koalasScore >= 100) {
//   console.log("Koalas win the trophy!");
// } else if (
//   dolphinsScore === koalasScore &&
//   dolphinsScore >= 100 &&
//   koalasScore >= 100
// ) {
//   console.log("The game results it's a draw. Both teams won the trophy!");
// } else {
//   console.log("No one wins the trophy.");
// }

// Assignment 10 - The switch Statement
// const language = "portuguese";
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("Chinese/Mandarin: MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("Spanish: second place in number of native speakers.");
//     break;
//   case "english":
//     console.log("English: third place in number of native speakers.");
//     break;
//   case "hindi":
//     console.log("Hindi: fourth place in number of native speakers.");
//     break;
//   case "arabic":
//     console.log("Arabic: fifth place in number of native speakers.");
//     break;
//   default:
//     console.log("Great language too! :D");
// }

// Assignment 11 - The Conditional (Ternary) Operator
// const population = 22;
// const country = "Portugal";

// // Type 1
// let pop =
//   population >= 33
//     ? "Portugal population is above average."
//     : "Portugal population is below average.";
// console.log(pop);

// // Type 2
// console.log(
//   `${country} population ${population >= 33 ? "above" : "below"} average.`
// );

// Challenge 4
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? (bill * 15) / 100 : (bill * 20) / 100;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value is ${
//     bill + tip
//   }. `
// );
