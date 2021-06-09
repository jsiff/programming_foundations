let numbers = [1, 2, 3];
numbers[6] = 5; 
console.log(numbers);

// let str1 = "Come over here!"
// console.log(str1.endsWith("!"));

// let str2 = "What's up Doc?"
// console.log(str2.endsWith("!"));

// let numbers = [1, 2, 3];
// numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10); // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.keys(ages).includes('Spot'));
console.log(ages.hasOwnProperty('Spot'));

let munsterDescription = "the Munsters are CREEPY and Spooky.";
console.log(munsterDescription[0].toUpperCase().concat(munsterDescription.slice(1, -1).toLowerCase()));
console.log(munsterDescription.charAt(0).toUpperCase() +
              munsterDescription.substring(1).toLowerCase());
let additionalAges = { Marilyn: 22, Spot: 237 };
console.log(Object.assign(ages, additionalAges)); 

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");
console.log(flintstones);

let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.indexOf("house"));
console.log(advice = advice.slice(0, 38));
console.log(advice.slice(0, advice.indexOf(' house')));