const person = {
    firstname: "Javier",
    lastName: "Choque",
    age: "33",
    eyeColor: "Brown",
    fullName: function(){
        return this.firstname + " " + this.lastName;
    }
};

console.log(person.fullName());