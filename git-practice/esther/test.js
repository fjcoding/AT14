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
        const sum=  numOne+numTwo;
        const res= numOne-numTwo;
        const div= numOne/numTwo;

        console.log({sum, res, div});
 }
}
let test= new Test("Esther", "Huarayo");
test.message();
Test.operations();
