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


// // Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// function selectEvenItems(strings) {
//   var result = [];
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index++;
//   });
//   return result;
// }
// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// // Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function(number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }
// console.log(max([5, 4, 8, 1, 2]));

// // Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

// function descending(numbers) {
//   var result = [];
//   for (var i = numbers.length - 1; i >= 0; i--) {
//     result.push(numbers[i]);
//   }
//   return result;
// }

// console.log(descending([1, 3, 5, 7]));

// // 1. Write a function that reverses a string. Don’t use the "reverse" method! (Note: you can use the .split("") method to convert a string into an array of characters).

// function reverseString(string) {
//   var reversedString = "";
//   var index = string.length - 1;

//   while (index >= 0) {
//     reversedString += string[index];
//     index--;
//   }
//   return reversedString;
// }

// console.log(reverseString("piglet"));


// // 2. Write a function that accepts a string and returns the number of times that the letter "a" occurs in it.

// function countAs(string) {
//   var stringArray = string.split("");
//   var count = 0;

//   stringArray.forEach(function(letter) {
//     if (letter === "a") {
//       count++;
//     }
//   });

//   return count;
// }

// console.log(countAs("bananas"));


// // 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!


// function findIndex(nums, target) {
//   var index = 0;
//   var foundIndex = null;

//   nums.forEach(function(num) {
//     if (num === target) {
//       foundIndex = index;
//     }
//     index++;
//   });
//   return foundIndex;
// }

// console.log(findIndex([2, 3, 4, 7, 9], 7));
// console.log(findIndex([2, 3, 4, 7, 9], 10));


// // 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!

// function addTarget(orderedNums, target) {
//   // find the correct index to place target
//   var placementIndex = 0;
//   while (orderedNums[placementIndex] < target) {
//     placementIndex++;
//   }

//   // move the other elements out of the way
//   var index = orderedNums.length - 1;
//   while (index >= placementIndex) {
//     orderedNums[index + 1] = orderedNums[index]
//     index--;
//   }

//   // place the number at the right index
//   orderedNums[placementIndex] = target;

//   return orderedNums;
// }

// console.log(addTarget([2, 3, 4, 7, 9], 5));


// 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string "lower" if the value is found in the lower half of the array, and it should return "higher" if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

function highOrLow(orderedNums, target) {
  var midIndex = Math.floor(orderedNums.length/2);
  var index = 0;
  var message = null;

  while (index < orderedNums.length) {
    if (orderedNums[index] === target ) {
      if (index < midIndex) {
        message = "low"
      } else {
        message = "high"
      }
    }
    index++;
  }
  return message;
}

console.log(highOrLow([2, 3, 4, 7, 9], 10));