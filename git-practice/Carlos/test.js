console.log("Hello world");

console.log(3+5);

console.log("Hello world " + (3+5));


//variable examples

//String
var names = "Carlos Tito";
console.log(names);

//Numbers
var number = 1000;
console.log(number);

//objects
var object ={
    name : "Angel",
    last_Name : "Caceres",
    phoneNumber:69772161
}
console.log(object);

//typeof
number = "hamburguer";

names = 150;
console.log(typeof names +"    " +typeof number);


let contador = 0;
while (contador < 10)
{
    console.log(contador);
    contador ++;
}

//function

function miFunction(a,b)
{
    console.log("Suma: " + (a+b));

}
//calling the function
miFunction(25,25);

//function with return

function miFunction2(a,b)
{

    return(a+b);

}
//calling the function
let resultado = miFunction2(60,60);
console.log(resultado);