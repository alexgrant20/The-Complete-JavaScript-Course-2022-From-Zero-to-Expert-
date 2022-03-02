'use strict';

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// function checkWinner(avgDol, avgKoal){
//     console.log(`${avgDol >= 2 * avgKoal ? `Dolphins Win (${avgDol} vs ${avgKoal})` : `Koalas win (${avgKoal} vs ${avgDol})`}`);
// }

// const teamDolphAvg = calcAverage(85, 54, 41);
// const teamKoalasAvg = calcAverage(23, 34, 27);

// checkWinner(teamDolphAvg, teamKoalasAvg);

// const calcTip = (billValue) => {
//     const percentage = billValue >= 50 && billValue <= 300 ? 0.15 : 0.20
//     return billValue * percentage;
// }

// const bills = [125, 555, 44];
// const tips = [];
// const totalPrice = [];

// bills.forEach((bill) => tips.push(calcTip(bill)));

// for(let i = 0; i < bills.length; i++){
//     totalPrice.push(bills[i] + tips[i]);
// }

// console.log(totalPrice)

// const mamen = {
//     firstName: "Alex",
//     lastName: "Grant",
//     birthYear: 2002,

//     calcAge: function() {
//         this.age = 2022 - this.birthYear
//         return this.age;
//     },

//     getSummary: function(){
//         return `hello my name is ${this.firstName + " " + this.lastName} and my age is ${this.calcAge()}`
//     }
// }

// console.log(mamen.getSummary());

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if(mark.bmi > john.bmi){
//     console.log(`Mark's BMI(${mark.bmi} is higher than John's (${john.bmi}))`)
// } else if(john.bmi > mark.bmi){
//     console.log(`John's BMI(${john.bmi} is higher than Mark's (${mark.bmi}))`)
// } else{
//     console.log(`John's BMI(${john.bmi} is same with Mark's (${mark.bmi}))`)
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = billValue => {
    const percentage = billValue >= 50 && billValue <= 300 ? 0.15 : 0.2;
    return billValue * percentage;
};

const calcAverage = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
};

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    const total = tip + bills[i];
    tips.push(tip);
    totals.push(total);
}

const priceAvg = calcAverage(totals);
