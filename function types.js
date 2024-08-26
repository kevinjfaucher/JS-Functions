// Define an array with some elements
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Use a for loop to iterate over the array and print each element
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ------------------------------------------------------------------------------------------------------------------



function addFive(number) {
    return number + 5;
}

// Example usage:
console.log(addFive(10)); // Output: 15

/*
Global Scope: Named functions are hoisted, 
meaning they can be called before they are defined in the code. 
This makes them ideal for utility functions that need to be available throughout the code.
Named for Clarity: The function name (addFive) makes it easy to identify in code and during debugging.

Readable and Traditional: This is the most traditional way to define a function, making it highly readable, 
especially for beginners or in teams that prefer a more conventional style.

Named Function: The function is named addFive, making it easy to identify in stack traces when debugging.

*/

// -------------------------------------------------------------------------------------------------
// Function Expressions

const addFive = function addFiveFunction(number) {
    return number + 5;
};

// Example usage:
console.log(addFive(10)); // Output: 15

/*
Use Case:

    Encapsulation: Like other function expressions, this one is not hoisted,
     so it is only available after it is defined in the code.
    Named Function Expression: The function addFiveFunction has a name,
     which can be helpful for debugging, especially when it appears in stack traces. 
     However, the function is still assigned to the variable addFive, so it’s called using that variable.
    Reassignable: Function expressions can be reassigned if needed.



    Encapsulation: Function expressions are not hoisted, so they are defined at runtime. This is useful when you want to ensure that a function is only available
    after a certain point in the code, often for better encapsulation.

    Anonymous Functions: You can create anonymous functions, which can be useful in callbacks,
    event listeners, or immediately invoked function expressions (IIFEs).
    
    Flexibility: Function expressions can be used in places where you need a
    function that might be reassigned later or when you want to pass a function as an argument.

*/

// --------------------------------------------------------------------------------------


// Initial function expression
let operation = function(number) {
    return number + 5;
};

// Reassigning the function expression
operation = function(number) {
    return number * 2;
};

// Example usage:
console.log(operation(10)); // Output: 20

/*
    The function operation is initially defined to add 5 to the input number.
    Later in the code, operation is reassigned to a different function that multiplies the input number by 2.
    This flexibility allows you to change the behavior of operation at runtime.
*/


// -------------------------------------------------------------------------------------------------------------


// Dynamic Behavior Changes

/*
    Context-Specific Behavior: You might want a function to behave differently based on certain conditions, 
    user input, or state changes. By reassigning the function, 
    you can easily switch its behavior without rewriting large portions of code.


    In this example, the calculateDiscount function is reassigned based on whether the user is a member or not, 
    allowing the same function name to be used throughout the code with context-specific behavior.
*/
let calculateDiscount;

if (user.isMember) {
    calculateDiscount = function(price) {
        return price * 0.9; // 10% discount for members
    };
} else {
    calculateDiscount = function(price) {
        return price; // No discount for non-members
    };
}

console.log(calculateDiscount(100)); // Outputs 90 or 100 depending on user status




// -------------------------------------------------------------------------------------------------------


// Function that takes another function as an argument
function applyOperation(func, number) {
    return func(number);
}

// Function expression
const addFive = function(number) {
    return number + 5;
};

// Passing the function expression as an argument
console.log(applyOperation(addFive, 10)); // Output: 15


// ----------------------------------------------------------------------------------

// Arrow Function


const addFive = (number) => {
    return number + 5;
};

// Example usage:
console.log(addFive(10)); // Output: 15

/*
Use Case:

    Concise Syntax: Arrow functions offer a more concise way to write functions, which is useful for small, inline functions.

    Lexical this: Arrow functions inherit the this value from their surrounding context, 
    making them particularly useful in scenarios where maintaining the this context is important, such as in callbacks.
    
    Expression-Based: Arrow functions are expressions and are commonly used in functional programming.

*/



// -------------------------------------------------------------------------------------------------------------

// Using all three types of functions


// 1. Named Function: Calculate the total price of three items
function calculateTotalPrice(item1, item2, item3) {
    return item1 + item2 + item3;
}

// 2. Function Expression: Apply a discount
const applyDiscount = function(totalPrice, discountPercentage) {
    return totalPrice - (totalPrice * (discountPercentage / 100));
};

// 3. Arrow Function: Add tax to the final amount
const addTax = (amount, taxRate) => {
    return amount + (amount * (taxRate / 100));
};

// Example usage:
const item1Price = 50;
const item2Price = 30;
const item3Price = 20;

const totalPrice = calculateTotalPrice(item1Price, item2Price, item3Price);
console.log("Total Price before Discount: $" + totalPrice);

const discountedPrice = applyDiscount(totalPrice, 10); // 10% discount
console.log("Price after Discount: $" + discountedPrice);

const finalPrice = addTax(discountedPrice, 8); // 8% tax
console.log("Final Price after Tax: $" + finalPrice);


/*
Named Function (calculateTotalPrice):

    This function takes the prices of three items as arguments and returns their sum. 
    It's a straightforward calculation of the total price of the items.

Function Expression (applyDiscount):

    This function expression takes the total price and a discount percentage as arguments.
    It calculates the discounted price by subtracting the discount amount from the total price.

Arrow Function (addTax):

    This arrow function takes the discounted amount and a tax rate as arguments. 
    It adds the tax to the discounted price and returns the final price.

*/
