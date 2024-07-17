function fizzBuzz(nums) {
  for (let num of nums) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
}

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
