class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(Currentyear){
        return Currentyear - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age(year) + " years old.");
