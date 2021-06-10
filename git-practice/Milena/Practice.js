/* First Exercise  basic*/
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));


/*function that concatenates two strings*/
function concatenates(a,b){
    return `${a} ${b}.`;
}
console.log(concatenates('Hello','World'));

/*function that returns the minimum of two numbers*/

function minTwoNumbers(a,b){
    if(a < b){
        return a
    }
    else{
        return b
    }
}
console.log(minTwoNumbers(10,20);

/*Write a program that asks for a number greater than one and that writes if the number is prime or not*/

let number = prompt('enter a number: ');

if(number <= 1){
    console.log(`The number ${ number } must be greater than one`);
}
else {
    let accountant = 0;
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            accountant++;
        }
    }
    if(accountant == 2){
        console.log(`The number ${ number } is prime`);
    }
    else {
        console.log(`The number ${ number } no is prime`);
    }

}

/* Testing */ 