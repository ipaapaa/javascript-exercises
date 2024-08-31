const add = function(...nums) {
  nums = nums.flat()
  let sum = 0;
  for (let num of nums){
    sum += num;
  }
	return sum;
};

const subtract = function(...nums) {
  nums = nums.flat()
  nums.sort((a, b) => a - b);
  nums.reverse();
  let diff = nums[0];
  nums.splice(0,1)

  for(let num of nums){
    diff -= num;
  }

  return diff;
	
};



const sum = function(...nums) {
  nums = nums.flat();
  let sum = 0;
  for (let num of nums){
    sum += num;
  }
	return sum;
	
};


const multiply = function(...args) {
  const nums = args.flat();
  let product = 1;
  for (let num of nums){
    product *= num;
  }
	return product;

};

console.log(multiply([1,2,3,4,5]))

const power = function(base, exp) {
	return Math.pow(base,exp);
};

const factorial = function(nums) {
	let numbers = [];
  for (let i = nums; i > 0; i--){
    numbers.push(i);
  }
  let factorial = 1;
  for (let number of numbers){
    factorial *= number;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
