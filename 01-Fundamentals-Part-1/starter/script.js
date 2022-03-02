/*const markHeight = 1.69;
const markWeight = 78;
const markBMI = markWeight / markHeight ** 2;

const johnHeight = 1.95;
const johnWeight = 92;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

if(markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})`);
} else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's(${markBMI})`);
}

*/

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const firstScoreDol = 97;
const secondScoreDol = 112;
const thirdScoreDol = 81;

const firstScoreKoa = 109;
const secondScoreKoa = 95;
const thirdScoreKoa = 86;

const avgDol = (firstScoreDol + secondScoreDol + thirdScoreDol) / 3
const avgKoa = (firstScoreKoa + secondScoreKoa + thirdScoreKoa) / 3

const minScore = 100;

if(avgDol > avgKoa && avgDol >= minScore){
    console.log("Dolphins Team's Win");
} else if(avgKoa > avgDol && avgKoa >= minScore){
    console.log("Koalas Team's Win");
} else if(avgDol === avgKoa && avgKoa > minScore){
    console.log("TIE")
} else{
    console.log("No one win");
}

const values = 275;
const percentage = values >= 50 & values <= 300 ? 15 : 20;
console.log(`The bill was ${values}, the tip was ${values * (percentage / 100)}, and the total value ${values + values * (percentage / 100)}`)
