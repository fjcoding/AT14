class Flag {
    constructor(id, value = null) {
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
const flagLogging = new Flag('-l')
const flagDir = new Flag('-d', '/usr/logs')

console.log(flagPort.id);
console.log(flagPort.value);
console.log(flagLogging.id);
console.log(flagLogging.value);
console.log(flagDir.id);
console.log(flagDir.value);
*/
export { Flag }