const prompt = require('prompt-sync')()

let name = prompt('What is your name?');
console.log('Your name is', name);

let number1 = parseInt(prompt('Enter the first number:'));
let number2 = parseInt(prompt('Enter the second number:'));
let total = number1 + number2;  
console.log('The total is', total);

let number = prompt('Please enter a number between 1 and 10:');
if (number > 0 && number <= 10) {
    console.log('You have entered a valid number.')
    ;
}

let input = prompt('Enter your age:');
let age = parseInt(input);
if (age < 18 || age > 65) {
    console.log('You are eligible for a discount!')
    ;
}

let psi = prompt('Please enter the PSI value:');
let psivalue = parseInt(psi);
if (psivalue > 100) {
    console.log('The air quality is bad.');
}

    else if (psivalue > 50) {
        console.log('The air quality is moderate.');
    }
        else {
            console.log('The air quality is good.');
        }
    

let BMI = parseInt(prompt('Please enter your BMI:'));
if (BMI > 32){
    console.log('Obese');
}

    else if (BMI >=24){
        console.log('Overweight');
    }

        else if (BMI >=18){
            console.log('Normal');
        }

            else {
                console.log('Underweight');
            }

