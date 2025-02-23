// fizzbuzz is a function that takes an array of numbers and logs "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, "FizzBuzz" if the number is divisible by both 3 and 5, and the number if it is not divisible by 3 or 5.
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      console.log("FizzBuzz");
    } else if (array[i] % 3 === 0) {
      console.log("Fizz");
    } else if (array[i] % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(array[i]);
    }
  }
}

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15]);
