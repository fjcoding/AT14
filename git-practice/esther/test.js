class Test{
    constructor(name, lastName){
        this.name=name;
        this.lastName=lastName;
    }
    message(){
        console.log(`Hi my name is ${this.name} and my last name is ${this.lastName}`);
    }


    static operations(){
        const numOne=25;
        const numTwo=5;
        const sum= `Sum= ${numOne+numTwo}`;
        const res= `Substraction= ${numOne-numTwo}`;
        const mul= `Multiplication= ${numOne*numTwo}`;
        const div= `Division=  ${numOne/numTwo}`
        const op= "Operation with 25 and 5";

        console.log({op, sum, res, mul, div});
 }
}
let test= new Test("Esther", "Huarayo");
test.message();
Test.operations();
