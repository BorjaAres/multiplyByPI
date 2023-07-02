# Multiply by PI Program

This program prompts the user to enter a number and multiplies it by the mathematical constant PI. It utilizes JavaScript to perform the calculation and display the result in the console.

## Instructions

1. When prompted, enter a number.
2. The program will multiply the entered number by PI and display the result in the console.

## Code Explanation

The program consists of the following components:

1. **User Input**: The user is prompted to enter a number using the `prompt` function. The entered value is converted to a floating-point number using `parseFloat` and stored in the `num` variable.
2. **Multiplication Function**: The `multiplyByPI` function is defined to perform the multiplication operation. It takes a number as a parameter and returns the product of the number and the mathematical constant PI (`Math.PI`).
3. **Multiplication Operation**: The `multiplyByPI` function is called with the `num` variable as an argument to initiate the multiplication process. The result is stored in a temporary variable but not used.
4. **Displaying the Result**: The result of the multiplication operation is displayed on the web page. The line document.getElementById('myDiv1').innerHTML = multiplyByPI(num); assigns the result of multiplyByPI(num) to the inner HTML of an element with the ID myDiv1. This allows the result to be shown on the page.

Feel free to explore and modify the code as needed to suit your requirements. Enjoy multiplying by PI!

## Deploy

https://multiplybypi.netlify.app/
