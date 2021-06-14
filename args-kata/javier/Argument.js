class Arguments{
    constructor(Flag, Type){
        this.Flag = Flag;
        this.Type = Type;
    }
    getFlag(){ return this.Flag }
    getType(){ return this.Type }
}

module.exports = Arguments


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