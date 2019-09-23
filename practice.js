// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// // Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = {chi: 2700000};
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// // Write a method that prints out every number from 1 to 100. 
// function oneToAHundred() {
//   var num = 0;
//   while (num < 100) {
//     num += 1;
//     console.log(num);
//   }
// }

// oneToAHundred();


// // Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// function everyOtherNumber() {
//   var num = 0;
//   while (num < 100) {
//     if (num % 2 !== 0) {
//       console.log(num);
//     }
//     num += 1;
//   }
// }

// everyOtherNumber();


// // Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// function numOf55(numbers) {
//   var count = 0;
//   numbers.forEach(function(num) {
//     if (num === 55) {
//       count += 1;
//     }
//   });
//   console.log(count);
// }

// numOf55([1, 55, 55, 1002, 2, 55]);


// // Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// // For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function awesomesauce(strings) {
//   var lengthOfArray = strings.length;
//   var index = 0;
//   var awesomesaucedArray = [];

//   while (index < lengthOfArray) {
//     awesomesaucedArray.push(strings[index]);
//     if (index !== lengthOfArray - 1) {
//       awesomesaucedArray.push("awesomesauce");
//     }
//     index++;
//   }
//   return awesomesaucedArray;
// }

// console.log(awesomesauce(["a", "b", "c", "d", "e"]));


// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // Someone just bought two chairs. Change the hash such that the chair amount is 3.
// // The final result should be: {chair: 3, table: 2}
// var itemAmounts = {chair: 5, table: 2};
// itemAmounts["chair"] -= 2;
// console.log(itemAmounts);


// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // You received 7 desks to sell. Change the hash to include desks.
// // The final result should be: {chair: 5, table: 2, desk: 7}
// var itemAmounts = {chair: 5, table: 2};
// itemAmounts.desks = 7;
// console.log(itemAmounts);


// // Write a method that accepts a number and returns its factorial.
// // For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(num) {
//   var product = 1;
//   while (num > 0) {
//     product *= num;
//     num--;
//   }
//   return product;
// }

// console.log(factorial(6));


// // Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// // For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function printSums(nums1, nums2) {
//   nums1.forEach(function(num1) {
//     nums2.forEach(function(num2) {
//       console.log(num1 + num2);
//     });
//   });
// }

// printSums([1, 5, 10], [100, 500, 1000]);