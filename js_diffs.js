// // Equality check
// var x = 10;
// if (x === "10") {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// // Falsey values
// var x = 3;
// if (null) {
//   x = x + 1;
// }
// if (false) {
//   x = x + 1;
// }
// if (0) {
//   x = x + 1;
// }
// if ("") {
//   x = x + 1;
// }
// console.log(x);

// // Functions
// function printLyrics() {
//   console.log("Now this is a story all about how");
//   console.log("My life got flipped turned upside down");
//   console.log("And I'd like to take a minute, just sit right there");
//   console.log("I'll tell you how I became the prince of a town called Bel-Air");
// }

// printLyrics();

// // Scope
// var x = 100;
// function addOne(num) {
//   x = 1;
//   return num + x;
// }
// console.log(x);
// console.log(addOne(5));
// console.log(x);

// JavaScript objects vs. Ruby classes
var boat = {
  name: "S. S. Minnow",
  color: "white",
  price: 20000,
  getInfo: function() {
    return this.name + " costs " + this.price;
  }
};

console.log(boat);
console.log(boat.name);
boat.color = "red";
console.log(boat.color);
console.log(boat.getInfo());