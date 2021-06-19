class Flag {
    
    constructor(id, value) {

        this.id = id;
        this.value = value;
    }

    //get and set the "id"
    getId(){

        return this.id;
    }
    setId(id){

        this.id = id;
    }

    getValue(){

        return this.value;
    }
    setValue(value){

        this.value = value;
    }

}

/*
const flagPort = new Flag('-p', 8080)
console.log(flagPort.id);
console.log(flagPort.value);

flagPort.setValue(90);
console.log(flagPort.value);


const flagLogging = new Flag('-l')
const flagDir = new Flag('-d', '/usr/logs')

console.log(flagLogging.id);
console.log(flagLogging.value);
console.log(flagDir.id);
console.log(flagDir.value);
*/
export { Flag }