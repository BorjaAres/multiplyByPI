// create a function Introduce a number to be multiplied by PI and return the result

let num = parseFloat(prompt("Give me a number to be miltiplied by PI"));

function multiplyByPI(number) {
  return number * Math.PI;
}

multiplyByPI(num);

console.log(multiplyByPI(num));
