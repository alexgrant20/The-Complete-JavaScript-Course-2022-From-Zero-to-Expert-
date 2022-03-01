'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${firstName}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1990 && birthYear <= 1996) {
      // block scope
      const str = `And you are a millenial, ${firstName}`;

      // function scope
      var millenial = true;
      console.log(str);

      // block scope (if strict is on)
      function myNuts() {
        console.log('nuts hurts!');
      }
    }

    console.log(millenial);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(2000);

const theNewObject = {
  firstName: 'Jessica',
};

const objectCopy = Object.assign({}, theNewObject);
objectCopy.firstName = 'Deeznut';

const moma = '123';
let toNumb = Number(moma);
let toString = String(toNumb);
let toBOol = Boolean(toNumb);
let toUndefined = undefined;
