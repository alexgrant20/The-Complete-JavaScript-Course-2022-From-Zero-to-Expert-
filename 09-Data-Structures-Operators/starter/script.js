'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '20:30',
    address = '',
  }) {
    console.log(obj);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Meikarta 20',
  mainIndex: 2,
  starterIndex: 0,
});

// Object Destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing call tag object destructuring
const { name: resName, openingHours: opHour, categories: cat } = restaurant;
console.log(resName, opHour, cat);

// Set Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu);

// Mutating Variables
let i = 20;
let o = 21;
const obj = { i: 200, o: 250 };
({ i, o } = obj);
console.log(i, o);

// Nested object destructuring
const {
  fri: { open: x, close: y },
} = openingHours;
console.log(x, y);

/*
ARRAY DESTRUCTURING

// Array Desctructuring
const arr = [2, 3, 4];
const [x, y, z] = arr;

// Skiping Element in Array Descrutcturing
let [first, , third] = restaurant.categories;
console.log(first, third);

// Changing value in array (first -> third, third->first)
[third, first] = [first, third];
console.log(first, third);

// Destructuring return from function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// nested array destructuring
const nestedArr = [1, 2, [3, 4]];
const [a, b, [c, d]] = nestedArr;
console.log(a, b, c, d);

// Defaul values
const [p, q, r = 1] = [8, 9];
console.log(r);

*/
