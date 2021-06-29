// Question 1

// function first returns prop1: "hi there";
// function two stops because of the return, also returns undefined

// Question 2

// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);

// console.log(numArray);
// console.log(object); // "2" { first: [1, 2] }

// let object = { first: [1] };
// let numArray = object["first"].slice();
// numArray.push(2);

// console.log(numArray);
// console.log(object);

// let object = { first: [1] };
// let numArray = object["first"].concat();
// numArray.push(2);

// console.log(numArray);
// console.log(object);

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // because of shadowing "one is one, two is two, three is three"
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // one is one
// console.log(`two is: ${two}`); // two is two
// console.log(`three is: ${three}`); // three is three

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// Question 4

// return false, check for more or less than 4 components 

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length !== 4) {
//     return false;
//   }

//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }


//   return true;
// }

// console.log(isDotSeparatedIpAddress("172.16.81.1000"));

