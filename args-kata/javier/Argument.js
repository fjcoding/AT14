class Argument{
    constructor(flagId, Value = null){
        this.flagId = flagId;
        this.Value  = Value;
    }

    getFlagId(){ return this.flagId; }
    getValue(){ return this.Value; }

    setFlagId(flagId){this.flagId = flagId; }
    setValue(Value){this.Value = Value; }
}

export {Argument}

/*
const argumentPort = new Argument('-p', 8080)
const argumentLogging = new Argument('-l')
const argumentDir = new Argument('-d', '/usr/logs')
*/
/*
console.log(argumentPort.id);
console.log(argumentPort.value);
console.log(argumentLogging.id);
console.log(argumentLogging.value);
console.log(argumentDir.id);
console.log(argumentDir.value);
*/


//module.exports = Arguments


/*
export default class Arguments{
    constructor(Flag, Type){
        this.Flag = Flag;
        this.Type = Type;
    }
    getFlag(){ return this.Flag }
    getType(){ return this.Type }
}
*/